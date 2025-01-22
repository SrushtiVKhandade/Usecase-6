// eslint.config.js

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"]
    }
  }
