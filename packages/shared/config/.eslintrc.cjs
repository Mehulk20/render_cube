module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'unused-imports'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
