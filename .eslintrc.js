module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      extends: [
        'plugin:react/recommended',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        'react',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        indent: ['error', 2],
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-relative-packages': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      js: 'never',
      mjs: 'never',
    }],
    indent: ['error', 2],
  },
};
