/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "turbo",
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    "eslint:recommended"
  ],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.json",
          "./apps/*/tsconfig.json",
          "./packages/*/tsconfig.json",
        ],
      },
    },
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'never'],
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'react/jsx-no-bind': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-unresolved': 0,
    'react/style-prop-object': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
        1,
        {
            extensions: ['.ts', '.tsx'],
        },
    ],
    'prefer-const': 'error',
    'no-irregular-whitespace': 'error',
    'no-trailing-spaces': 'error',
    semi: 'error',
    'no-empty-function': 'error',
    'no-duplicate-imports': 'error',
    'newline-after-var': 'error',
    camelcase: [
        'error',
        {
            ignoreDestructuring: true,
            properties: 'never',
        },
    ],
},
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    "packages/db/generated/**",
    ".eslintrc.js",
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
  ],
};

module.exports = config;
