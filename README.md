React Priority+ Nav Menu
==========================

This is (yet another) [React](https://reactjs.org/) implemention of the Priority+ navigation menu pattern [1]. The logic for this implementation was heavily adapted from [this CodePen by Matt Walker](https://codepen.io/zammer/pen/pbxJdo). The built-in hamburger menu toggle implementation is an adaptation of [this CodePen by Elijah Manor](https://codepen.io/elijahmanor/pen/Igpoe).

## Installation
```
npm install @ryexley/boxelder
```
or

```
yarn add @ryexley/boxelder
```

## Usage

```js
const menuItems = [
  { url: "/#", content: "Home" },
  { url: "/#", content: "About" },
  { url: "/#", content: "Contact Us" }
];

<PriorityPlusNav menuItemData={ menuItems } />
```

For more examples, see [the component styleguide examples](src/components/priority-plus-nav/readme.md).

## Development
- Clone the repository and run `npm install` or `yarn install`.
- Run `npm run dev` or `yarn run dev` to start up the instance of [React Styleguidist](https://react-styleguidist.js.org/), and then open your browser to [http://localhost:6060](http://localhost:6060).
- Edit as necessary/desired, and let hot module reloading take care of the rest for you.

Git commit messages should conform to the [conventional-changelog-eslint](https://www.npmjs.com/package/conventional-changelog-eslint) format, and will be verified by [semantic-release](https://github.com/semantic-release/semantic-release) during releases.

----
[1]: More information about this pattern can be found at the following links:
- [Michael Scharnagl's blog](https://justmarkup.com/log/2012/06/responsive-multi-level-navigation/)
- [Brad Frost's blog](http://bradfrost.com/blog/web/complex-navigation-patterns-for-responsive-design/#priority-plus)
- [CSS Tricks](https://css-tricks.com/the-priority-navigation-pattern/)
