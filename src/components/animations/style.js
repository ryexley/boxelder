import { css } from "emotion";

const transitionAttribute = (attribute, time = 150) =>
  `${attribute} ${time}ms ease-in-out`;

export const fadeClass = css({
  transition: `
    ${transitionAttribute("opacity")},
    ${transitionAttribute("visibility")}
  `
});

const visible = {
  opacity: 1,
  visibility: "visible"
};

const hidden = {
  opacity: 0,
  visibility: "hidden"
};

export const fadeEnteringClass = css(hidden);

export const fadeEnteredClass = css(visible);

export const fadeExitingClass = css(visible);

export const fadeExitedClass = css(hidden);
