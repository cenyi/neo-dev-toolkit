export default [
  {
    files: ['**/*.js'],
    ignores: ['**/node_modules/**', '**/dist/**'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        browser: true,
        es2020: true
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'prefer-arrow-callback': 'warn',
      'arrow-spacing': 'warn',
      'space-before-function-paren': ['warn', 'always'],
      'semi': ['warn', 'always'],
      'quotes': ['warn', 'single'],
      'indent': ['warn', 2, { 'SwitchCase': 1 }]
    }
  }
];
