import simpleImportSort from 'eslint-plugin-simple-import-sort'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', '**/*.astro'],
  },
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
    ts: true,
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
