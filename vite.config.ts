import { defineConfig } from "vite";
import virtualGitmojiJson from "./configs/virtual-gitmoji-json";

export default defineConfig({
  plugins: [virtualGitmojiJson()],
  build: {
    lib: {
      entry: ['src/cz-git-prompts/index.ts'],
      formats: ['es', 'cjs'],
    }
  }
})
