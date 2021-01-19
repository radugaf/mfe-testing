module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Import a file with .js it will processed by Babel
        exclude: /node_modules/, // Don't run Babel in /node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // Babel will process JSX and convert it to ES5
            plugins: ["@babel/plugin-transform-runtime"], // Add additional code to enable features inside the browser (like async)
          },
        },
      },
    ],
  },
};
