// adapted from https://codepen.io/zammer/pen/pbxJdo

import React, { Component } from "react";
import PropTypes from "prop-types";
import { classList, throttle } from "../../util";
import { MenuToggle } from "../menu-toggle";
import {
  responsiveMenuClass,
  menuToggleClass,
  moreMenuItemsContainerClass,
  menuItemClass,
  moreMenuItemClass
} from "./style";

export class ResponsiveMenu extends Component {
  static propTypes = {
    /** Custom class for the menu */
    className: PropTypes.string,
    /** Foreground color for the more menu items menu toggle (the "hamburger" menu). */
    menuToggleColor: PropTypes.string,
    /** Custom class to be applied to the more menu items container, which is unstyled by default. */
    moreMenuItemsClassName: PropTypes.string,
    /** The CSS height that will be applied to the menu. This will also be used and applied to each of the individual menu items as well. */
    height: PropTypes.string,
    /** CSS `min-width` applied to the more menu items container. */
    dropdownMenuMinWidth: PropTypes.string,
    /** The minimum number of menu items to ensure are always shown by the menu. */
    minPriorityItemCount: PropTypes.number,
    /** This value, in pixels, will be used to calculate when the last visible menu item in the menu will be hidden. This value can be used to control how much space is visible between the last visible item in the menu, and the menu toggle. */
    hideMenuItemBuffer: PropTypes.number,
    /** CSS value used for a media query that will determine when the more items menu dropdown will switch from `width: 100%` to `width: auto` using the `dropdownMenuMinWidth` prop for its width. */
    fullWidthDropdownMenuBreak: PropTypes.string,
    /** Array of data used for rendering the menu */
    menuItemData: PropTypes.arrayOf(
      PropTypes.shape({
        /** Target URL for the menu item (defaults to `#`). */
        url: PropTypes.string,
        /** Menu item anchor tag content. Can be either a string or an element (e.g. an image or an icon). */
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
          .isRequired
      })
    )
  };

  static defaultProps = {
    className: null,
    menuToggleColor: "#ccc",
    moreMenuItemsClassName: null,
    height: "2.5rem",
    dropdownMenuMinWidth: "12rem",
    minPriorityItemCount: 0,
    hideMenuItemBuffer: 20,
    fullWidthDropdownMenuBreak: "640px",
    menuItemData: []
  };

  constructor(props) {
    super(props);

    this.state = {
      priorityMenuItems: [],
      moreMenuItems: [],
      showMenuToggle: true,
      menuToggleActive: false,
      showMoreMenuItems: false
    };

    this.renderPriorityItems = this.renderPriorityItems.bind(this);
    this.renderMoreMenuItems = this.renderMoreMenuItems.bind(this);
    this.renderMenuToggle = this.renderMenuToggle.bind(this);
    this.toggleMoreMenuItems = this.toggleMoreMenuItems.bind(this);
    this.sortMenuItems = this.sortMenuItems.bind(this);
    this.navResizeHandler = throttle(this.sortMenuItems, 250);
    this.calculatePriorityItemCount = this.calculatePriorityItemCount.bind(
      this
    );
  }

  componentWillMount() {
    const { menuItemData } = this.props;
    this.setState(
      () => ({ priorityMenuItems: menuItemData }),
      () => {
        window.addEventListener("resize", this.navResizeHandler);
      }
    );
  }

  componentDidMount() {
    this.menuItemWidths = [...this.navbar.children].map(
      menuItem => menuItem.scrollWidth
    );

    this.sortMenuItems();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.navResizeHandler);
  }

  calculatePriorityItemCount() {
    const {
      menuItemData,
      minPriorityItemCount,
      hideMenuItemBuffer
    } = this.props;
    const navbarWidth = this.navbar ? this.navbar.clientWidth : 0;
    const toggleWidth = this.toggle ? this.toggle.el.scrollWidth : 0;

    let menuContentWidth = (toggleWidth + hideMenuItemBuffer); // prettier-ignore
    let currentMenuItemIndex = 0;

    while (currentMenuItemIndex < menuItemData.length) {
      const lastMenuItem = currentMenuItemIndex === (menuItemData.length - 1); // prettier-ignore
      const navbarViewportWidthExceeded =
        menuContentWidth +
          (this.menuItemWidths[currentMenuItemIndex] + hideMenuItemBuffer) >
        navbarWidth;

      if (lastMenuItem && !navbarViewportWidthExceeded) {
        return menuItemData.length;
      }

      if (navbarViewportWidthExceeded) {
        return currentMenuItemIndex < minPriorityItemCount
          ? minPriorityItemCount
          : currentMenuItemIndex;
      }

      menuContentWidth += this.menuItemWidths[currentMenuItemIndex];
      currentMenuItemIndex += 1;
    }

    return 0;
  }

  sortMenuItems() {
    const { menuItemData } = this.props;

    const priorityItemsCount = this.calculatePriorityItemCount();
    const menuItems = [...menuItemData];
    const priorityMenuItems = menuItems.slice(0, priorityItemsCount);
    const moreMenuItems =
      priorityMenuItems.length !== menuItems.length
        ? menuItems.slice(priorityItemsCount, menuItems.length)
        : [];

    this.setState(({ menuToggleActive }) => ({
      priorityMenuItems,
      moreMenuItems,
      showMenuToggle: moreMenuItems.length,
      menuToggleActive: !!(menuToggleActive && moreMenuItems.length), // prettier-ignore
      showMoreMenuItems: !!(menuToggleActive && moreMenuItems.length) // prettier-ignore
    }));
  }

  toggleMoreMenuItems({ active }) {
    this.setState(() => ({
      menuToggleActive: active,
      showMoreMenuItems: active
    }));
  }

  renderPriorityItems() {
    const { height } = this.props;
    const { priorityMenuItems } = this.state;
    const classes = classList(menuItemClass({ height }));

    if (priorityMenuItems.length) {
      return priorityMenuItems.map((item, index) => (
        <a
          className={classes}
          href={item.url}
          key={`priority-menu-item-${index.toString()}`}>
          {item.content}
        </a>
      ));
    }

    return null;
  }

  renderMoreMenuItems() {
    const {
      height,
      dropdownMenuMinWidth,
      moreMenuItemsClassName,
      fullWidthDropdownMenuBreak
    } = this.props;
    const { moreMenuItems, showMoreMenuItems } = this.state;
    const menuClasses = classList(
      moreMenuItemsContainerClass({
        offsetTop: height,
        fullWidthBreak: fullWidthDropdownMenuBreak
      }),
      moreMenuItemsClassName,
      !showMoreMenuItems ? "hidden" : null
    );
    const menuItemClasses = classList(
      menuItemClass({ height, minWidth: dropdownMenuMinWidth }),
      moreMenuItemClass
    );

    const menuItems = () => {
      if (moreMenuItems.length) {
        return moreMenuItems.map((item, index) => (
          <a
            className={menuItemClasses}
            href={item.url}
            key={`more-menu-item-${index.toString()}`}>
            {item.content}
          </a>
        ));
      }

      return null;
    };

    return (
      <div
        className={menuClasses}
        style={{ minWidth: dropdownMenuMinWidth }}
        ref={el => {
          this.moreMenuItems = el;
        }}>
        {menuItems()}
      </div>
    );
  }

  renderMenuToggle() {
    const { menuToggleColor } = this.props;
    const { showMenuToggle, menuToggleActive } = this.state;

    if (showMenuToggle) {
      return (
        <MenuToggle
          classname={menuToggleClass}
          active={menuToggleActive}
          color={menuToggleColor}
          onToggle={this.toggleMoreMenuItems}
          ref={menuToggle => {
            this.toggle = menuToggle;
          }}
        />
      );
    }

    return null;
  }

  render() {
    const { className, height } = this.props;
    const menuClasses = classList(responsiveMenuClass({ height }), className);

    return (
      <nav
        className={menuClasses}
        aria-label="navigation"
        role="navigation"
        ref={el => {
          this.navbar = el;
        }}>
        {this.renderPriorityItems()}
        {this.renderMoreMenuItems()}
        {this.renderMenuToggle()}
      </nav>
    );
  }
}
