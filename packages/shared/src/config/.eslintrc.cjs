/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', 'build', 'coverage'],
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],

  overrides: [
    // Frontend: React app in client/
    {
      files: ['client/**/*.{js,jsx}'],
      env: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['react', 'react-hooks'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off', // Not needed in React 17+
        'prettier/prettier': 'error',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      },
    },

    // Backend: Node app in server/
    {
      files: ['server/**/*.js'],
      env: {
        node: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['node'],
      extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'node/no-unsupported-features/es-syntax': 'off', // if using ESM
      },
    },
  ],
};
