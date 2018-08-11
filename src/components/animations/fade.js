import React from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { classList } from "../../util";
import {
  fadeClass,
  fadeEnteringClass,
  fadeEnteredClass,
  fadeExitingClass,
  fadeExitedClass
} from "./style";

const fadeState = {
  entering: fadeEnteringClass,
  entered: fadeEnteredClass,
  exiting: fadeExitingClass,
  exited: fadeExitedClass
};

const fadeDuration = 150;
export const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={fadeDuration} appear>
    {state => {
      const fadeClassList = classList(fadeClass, fadeState[state]);
      return <div className={fadeClassList}>{children}</div>;
    }}
  </Transition>
);

Fade.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.node
};

Fade.defaultProps = {
  in: false,
  children: null
};
