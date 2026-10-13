import jsxA11y from 'eslint-plugin-jsx-a11y';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import security from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  {
    files: ['src/**/*.{ts,tsx}', 'scripts/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      security,
      'no-unsanitized': noUnsanitized,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...security.configs.recommended.rules,
      ...noUnsanitized.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      // Static-export site: content loaders read fixed, repo-local paths at
      // build time, never user input, so these detectors are noise here.
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-object-injection': 'off',
    },
  },
];

export default eslintConfig;
