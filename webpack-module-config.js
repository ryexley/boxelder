module.exports = {
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
};
