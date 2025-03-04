import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import babelParser from "@babel/eslint-parser"; // ✅ Import the parser

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    languageOptions: {
      parser: babelParser, // ✅ Use the imported parser
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },
];

export default eslintConfig;
