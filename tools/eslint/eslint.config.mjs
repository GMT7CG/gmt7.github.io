import noUnsanitized from 'eslint-plugin-no-unsanitized';
import security from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

// Security-only lint. Style, correctness, and a11y stay with Biome (root `npm run lint`); this run
// exists for the plugins Biome lacks. Run from the repo root via `npm run lint:security`.
export default tseslint.config(
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  {
    files: ['src/**/*.{ts,tsx}', 'scripts/**/*.ts'],
    languageOptions: { parser: tseslint.parser },
    extends: [security.configs.recommended, noUnsanitized.configs.recommended],
    rules: {
      // Static-export site: content loaders read fixed, repo-local paths at
      // build time, never user input, so these detectors are noise here.
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-object-injection': 'off',
    },
  },
);
