/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: "all",
  tabWidth: 4,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./packages/config/tailwind",
};
