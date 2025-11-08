import js from "@eslint/js"; // Basic JavaScript rules
import globals from "globals"; // Global variables definitions
import prettier from "eslint-config-prettier"; // Prettier integration
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended, // ← Use recommended JS rules
  {
    ...reactPlugin.configs.flat.recommended, // ← Use recommended React rules
    settings: {
      react: {
        version: "detect", // ← Auto-detect React version for compatibility
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"], // ← Apply to all .js and .jsx files
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
    rules: {
      "react/no-unescaped-entities": "off", // ← Allow quotes/apostrophes in JSX without escaping
      "react/prop-types": "off", // ← Disable prop-types validation (using TypeScript instead)
    },
  },
  prettier, // ← Don't conflict with Prettier formatting
];
