import { css } from "emotion";

export const menuToggleContainerStyle = {
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  margin: "0 0.5rem",
  position: "absolute",
  right: 0,
  top: 0
};

export const menuToggleContainerClass = css(menuToggleContainerStyle);

export const menuToggleDefaultStyle = ({ color }) => ({
  alignItems: "center",
  display: "flex",
  position: "relative",

  "span, span:before, span:after": {
    background: color,
    borderRadius: "2px",
    content: '""',
    cursor: "pointer",
    display: "block",
    height: "0.25rem",
    position: "absolute",
    transition: "all 150ms ease-in-out",
    width: "100%"
  },

  "span:before": {
    top: "-0.65rem"
  },

  "span:after": {
    bottom: "-0.65rem"
  },

  "&.active": {
    span: {
      background: "transparent"
    },

    "span:before, span:after": {
      top: 0
    },

    "span:before": {
      transform: "rotate(45deg)"
    },

    "span:after": {
      transform: "rotate(-45deg)"
    }
  }
});

export const menuToggleDefaultClass = ({ color }) =>
  css(menuToggleDefaultStyle({ color }));
