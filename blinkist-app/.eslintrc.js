module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: false,
    experimentalObjectRestSpread: true,
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    quotes: "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
};
