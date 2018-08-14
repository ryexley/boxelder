import React, { Component } from "react";
import PropTypes from "prop-types";
import { classList } from "../../util";
import { menuToggleContainerClass, menuToggleDefaultClass } from "./style";

/**
 * This is the default dropdown menu toggle icon for the responsive menu
 * component. Adapted as a react component from https://codepen.io/elijahmanor/pen/Igpoe.
 */
export class MenuToggle extends Component {
  static propTypes = {
    /** Context specific CSS class to be applied to the component */
    className: PropTypes.string,
    /** The size, in pixels, of the menu toggle. */
    size: PropTypes.string,
    /** The icon color */
    color: PropTypes.string,
    /** The icon color when it is active/open. Will use `color` when no value is provided. */
    activeColor: PropTypes.string,
    /** Function to be executed when the icon is clicked/toggled (default is noop). */
    onToggle: PropTypes.func.isRequired,
    /** Boolean indicator for the active state of the toggle. */
    active: PropTypes.bool
  };

  static defaultProps = {
    className: null,
    size: "2rem",
    color: "#ccc",
    activeColor: null,
    active: false
  };

  constructor(props) {
    super(props);

    const { active } = props;
    this.state = { active };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    if (e) {
      e.preventDefault();
    }

    this.setState(
      prevState => ({
        active: !prevState.active
      }),
      () => {
        const { active } = this.state;
        const { onToggle } = this.props;
        onToggle({ active });
      }
    );
  }

  render() {
    const { active } = this.state;
    const { className, color, activeColor, size } = this.props;
    const containerClasses = classList(menuToggleContainerClass, className);
    const toggleClass = classList(
      menuToggleDefaultClass({ color, activeColor }),
      active ? "active" : null
    );
    const toggleStyle = {
      height: "100%",
      width: size
    };

    return (
      <div className={containerClasses} style={toggleStyle}>
        <a
          href="#"
          id="react-responsive-menu--menu-toggle"
          className={toggleClass}
          style={toggleStyle}
          aria-hidden="true"
          aria-controls="navigation-dropdown"
          aria-expanded={active ? "true" : "false"}
          onClick={this.toggle}
          ref={el => {
            this.el = el;
          }}>
          <span />
        </a>
      </div>
    );
  }
}
