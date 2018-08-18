const moduleConfig = require("./webpack-module-config");

module.exports = {
  title: "React Priority+ Nav (@ryexley/boxelder)",
  components: "src/components/**/*.js",
  ignore: ["**/style.js", "**/__*"],
  webpackConfig: {
    module: moduleConfig
  }
};
