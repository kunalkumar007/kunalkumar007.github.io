export const animate = (animateClass: string, delay: string | number) =>
  `animate__animated animate__${animateClass} animate__delay-${delay.toString()}s`;
