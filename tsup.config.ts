import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'cz-git': 'src/cz-git-prompts/index.ts',
    'commitlint': 'src/commitlint/index.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  noExternal: ['gitmojis'],
  clean: true,
  esbuildOptions(options) {
    options.charset = 'utf8'
    return options
  },
})
