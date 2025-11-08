import js from "@eslint/js"; // Basic JavaScript rules
import globals from "globals"; // Global variables definitions
import prettier from "eslint-config-prettier"; // Prettier integration

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended, // ← Use recommended JS rules
  {
    files: ["**/*.js"], // ← Apply to all .js files
    languageOptions: {
      globals: {
        ...globals.browser, // ← Browser globals (window, document, etc.)
        ...globals.node, // ← Node.js globals (process, Buffer, etc.)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ← Enable JSX parsing (for React)
        },
      },
    },
  },
  prettier, // ← Don't conflict with Prettier formatting
];
