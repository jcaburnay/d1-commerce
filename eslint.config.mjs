import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prefer-const": "error"
    }
  }
]);
