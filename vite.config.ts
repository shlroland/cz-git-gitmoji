import { defineConfig } from "vite";
import virtualGitmojiJson from "./configs/virtual-gitmoji-json";
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [virtualGitmojiJson(), dts({
    entryRoot: 'src',
    rollupTypes: true,
  }),],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'cz-git': 'src/cz-git-prompts/index.ts',
      },
      formats: ['es', 'cjs'],

    },
    emptyOutDir: true,
  },
})
