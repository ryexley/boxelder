import { css } from "emotion";

export const responsiveMenuStyle = ({ height }) => ({
  height,
  padding: "0 1rem",
  position: "relative",
  whiteSpace: "nowrap",

  "*": {
    boxSizing: "border-box"
  }
});

export const responsiveMenuClass = ({ height }) =>
  css(responsiveMenuStyle({ height }));

export const visibleMenuItemsStyle = {
  display: "flex",
  flexShrink: 0
};

export const visibleMenuItemsClass = css(visibleMenuItemsStyle);

export const menuToggleStyle = {};

export const menuToggleClass = css(menuToggleStyle);

const transitionAttribute = (attribute, time = 250) =>
  `${attribute} ${time}ms ease-in-out`;

export const moreMenuItemsContainerStyle = ({
  offsetTop = 0,
  minWidth,
  fullWidthBreak
} = {}) => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  opacity: 1,
  overflow: "hidden",
  paddingBottom: "1rem",
  position: "absolute",
  right: 0,
  transition: `
    ${transitionAttribute("opacity")},
    ${transitionAttribute("visibility")}
  `,
  top: offsetTop,
  visibility: "visible",
  width: "100%",
  zIndex: 1,

  [`@media screen and (min-width: ${fullWidthBreak})`]: {
    minWidth,
    width: "auto"
  },

  "&.hidden": {
    opacity: 0,
    paddingBottom: 0,
    visibility: "hidden"
  }
});

export const moreMenuItemsContainerClass = ({
  offsetTop = 0,
  minWidth,
  fullWidthBreak
} = {}) =>
  css(moreMenuItemsContainerStyle({ offsetTop, minWidth, fullWidthBreak }));

export const menuItemStyle = ({ height }) => ({
  display: "inline-block",
  height,
  lineHeight: height,
  minWidth: "3rem",
  textDecoration: "none"
});

export const menuItemClass = ({ height }) => css(menuItemStyle({ height }));

export const moreMenuItemStyle = {
  padding: "0 1rem"
};

export const moreMenuItemClass = css(moreMenuItemStyle);
