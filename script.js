const root = document.documentElement;
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const canAnimate = !motionQuery.matches;

root.classList.add("js");

const revealTargets = [
  ".proof",
  ".proof-grid article",
  ".section-heading",
  ".case-card",
  ".service-grid article",
  ".timeline article",
  ".education",
  ".cert-list article",
  ".contact-card",
  ".site-footer",
];

const revealElements = document.querySelectorAll(revealTargets.join(","));

function showElement(element) {
  element.classList.add("is-visible");
}

revealElements.forEach((element) => element.classList.add("reveal"));

function initGsapAnimations() {
  if (!canAnimate || !window.gsap || !window.ScrollTrigger) {
    return false;
  }

  const { gsap, ScrollTrigger } = window;
  root.classList.add("gsap-motion");
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  gsap
    .timeline()
    .from(".site-header", { duration: 0.55, y: -18 })
    .from(".service-chip", { duration: 0.52, scale: 0.96, stagger: 0.06, y: 24 }, "-=0.15")
    .from(".hero-copy", { duration: 0.72, y: 36 }, "-=0.2")
    .from(".hero-copy .eyebrow", { duration: 0.36, y: 18 }, "-=0.42")
    .from(".hero-copy h1", { duration: 0.72, y: 42 }, "-=0.22")
    .from(".hero-summary", { duration: 0.58, y: 20 }, "-=0.38")
    .from(".hero-actions a", { duration: 0.42, stagger: 0.07, y: 16 }, "-=0.26")
    .from(".hero-card", { duration: 0.72, x: 34 }, "-=0.58");

  revealElements.forEach((element) => {
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 34 },
      {
        autoAlpha: 1,
        duration: 0.72,
        onStart: () => showElement(element),
        scrollTrigger: {
          once: true,
          start: "top 84%",
          trigger: element,
        },
        y: 0,
      },
    );
  });

  gsap.utils.toArray(".case-card").forEach((card) => {
    const bars = card.querySelectorAll(".bar-chart span");
    const lines = card.querySelectorAll(".visual-lines span");
    const roleRows = card.querySelectorAll(".visual-roles span");
    const speedStats = card.querySelectorAll(".visual-speed span");

    if (bars.length) {
      gsap.from(bars, {
        duration: 0.8,
        scaleY: 0.08,
        scrollTrigger: { once: true, start: "top 76%", trigger: card },
        stagger: 0.08,
        transformOrigin: "bottom",
      });
    }

    if (lines.length) {
      gsap.from(lines, {
        duration: 0.58,
        scaleX: 0.16,
        scrollTrigger: { once: true, start: "top 76%", trigger: card },
        stagger: 0.08,
        transformOrigin: "left",
      });
    }

    if (roleRows.length) {
      gsap.from(roleRows, {
        autoAlpha: 0,
        duration: 0.58,
        scrollTrigger: { once: true, start: "top 76%", trigger: card },
        stagger: 0.09,
        x: -24,
      });
    }

    if (speedStats.length) {
      gsap.from(speedStats, {
        autoAlpha: 0,
        duration: 0.54,
        scrollTrigger: { once: true, start: "top 76%", trigger: card },
        stagger: 0.08,
        y: 20,
      });
    }
  });

  gsap.to(".cta-marquee", {
    ease: "none",
    scrollTrigger: {
      end: "bottom top",
      scrub: 0.8,
      start: "top bottom",
      trigger: ".cta-band",
    },
    xPercent: -12,
  });

  return true;
}

function initFallbackReveal() {
  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach(showElement);
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        showElement(entry.target);
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

if (!initGsapAnimations()) {
  initFallbackReveal();
}

if (motionQuery.matches) {
  revealElements.forEach(showElement);
}

const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
  );

  sections.forEach((section) => navObserver.observe(section));
}
