import { defineConfig, type Options } from 'tsup'

export function createConfig(entry: Options['entry']) {
  return defineConfig([{
    entry,
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    noExternal: ['gitmojis'],
    clean: true,
    esbuildOptions(options) {
      options.charset = 'utf8'
      return options
    },
  }])
}
