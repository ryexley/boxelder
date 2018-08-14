module.exports = {
  title: "React Priority+ Nav (@ryexley/boxelder)",
  components: "src/components/**/*.js",
  ignore: ["**/style.js", "**/__*"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/react", "@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            },
            {
              loader: "eslint-loader"
            }
          ]
        }
      ]
    }
  }
};
