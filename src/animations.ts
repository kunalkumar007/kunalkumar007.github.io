import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const rotateCircle = (selector: string) => {
  let rule = CSSRulePlugin.getRule(selector);
  gsap.to(rule, { rotation: "+=360", repeat: -1, duration: 5 });
};

export { rotateCircle };
