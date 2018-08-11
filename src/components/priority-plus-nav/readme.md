### Basic Usage With No Custom Styles

```js
const menuItems = [...Array(17).fill(null)].map((_, index) => ({
  url: "/#",
  content: `Menu Item ${index + 1}`
}));

<PriorityPlusNav
  menuItemData={menuItems}
  style={{ border: "1px dashed #ccc" }} />
```

### Custom Styles

```js
const { css } = require("emotion");

const fontStyle = {
    color: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: "0.875rem",
    fontWeight: 100
};

const menuClass = css({
  background: "#036",
  backgroundImage: "linear-gradient(135deg, #306, #036)",

  "> a": {
    ...fontStyle,
    minWidth: "7rem",

    "&:hover": {
      background: "#306"
    }
  }
});

const dropdownMenuItemsContainerClass = css({
  background: "#036",

  "> a": {
    ...fontStyle
  }
});

const menuItems = [...Array(10).fill(null)].map((_, index) => ({
  url: "/#",
  content: `Menu Item ${index + 1}`
}));

<PriorityPlusNav
  className={ menuClass }
  menuToggleColor="#fff"
  moreMenuItemsClassName={ dropdownMenuItemsContainerClass }
  menuItemData={menuItems} />
```

### Custom Styles with Static Menu Items

```js
const { css } = require("emotion");

const fontStyle = {
    color: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: "0.875rem",
    fontWeight: 100
};

const menuClass = css({
  background: "#036",
  backgroundImage: "linear-gradient(135deg, #306, #036)",

  "> a": {
    ...fontStyle,
    paddingRight: "1.5rem"
  }
});

const dropdownMenuItemsContainerClass = css({
  background: "#036",

  "> a": {
    ...fontStyle
  }
});

const menuItems = [
  { url: "/#", content: "Home" },
  { url: "/#", content: "About" },
  { url: "/#", content: "Contact Us" },
  { url: "/#", content: "Portfolio" },
  { url: "/#", content: "Store" },
  { url: "/#", content: "Support" },
  { url: "/#", content: "Locations" },
  { url: "/#", content: "Community" },
  { url: "/#", content: "Partners" },
  { url: "/#", content: "Search" },
  { url: "/#", content: "Other" },
  { url: "/#", content: "Something Else" },
  { url: "/#", content: "Wow" },
  { url: "/#", content: "Blah" },
  { url: "/#", content: "More" },
];

<PriorityPlusNav
  className={ menuClass }
  menuToggleColor="#fff"
  moreMenuItemsClassName={ dropdownMenuItemsContainerClass }
  menuItemData={menuItems} />
```

### Custom Styles with Only a Few Static Menu Items

```js
const { css } = require("emotion");

const fontStyle = {
    color: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: "0.875rem",
    fontWeight: 100
};

const menuClass = css({
  background: "#036",
  backgroundImage: "linear-gradient(135deg, #306, #036)",

  "> a": {
    ...fontStyle,
    paddingRight: "1.5rem"
  }
});

const dropdownMenuItemsContainerClass = css({
  background: "#036",

  "> a": {
    ...fontStyle
  }
});

const menuItems = [
  { url: "/#", content: "Home" },
  { url: "/#", content: "About" },
  { url: "/#", content: "Contact Us" },
  { url: "/#", content: "Portfolio" },
  { url: "/#", content: "Store" },
  { url: "/#", content: "Support" }
];

<PriorityPlusNav
  className={ menuClass }
  menuToggleColor="#fff"
  moreMenuItemsClassName={dropdownMenuItemsContainerClass}
  menuItemData={menuItems} />
```
