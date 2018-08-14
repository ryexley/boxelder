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
/**
 * Uses a ReactTransitionGroup `Transition` to provide a custom fading in animation
 * effect for the given child component. For the purposes of this package, it is
 * used for applying a fade transition to the menu toggle component when it is
 * rendered/shown in the menu.
 */
export const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={fadeDuration} appear>
    {state => {
      const fadeClassList = classList(fadeClass, fadeState[state]);
      return <div className={fadeClassList}>{children}</div>;
    }}
  </Transition>
);

Fade.propTypes = {
  /** Boolean prop indicating whether or not the transition should be applied. */
  in: PropTypes.bool,
  /** The component(s) that the fade animation should be applied to. */
  children: PropTypes.node
};

Fade.defaultProps = {
  in: false,
  children: null
};
