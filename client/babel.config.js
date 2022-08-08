module.exports = {
  presets: [
    "@babel/preset-env","next/babel",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
  ]
};

