import { Plugin } from 'vite'
import type { GitmojiJson } from '../types'
export const MODULE_ID = 'virtual:gitmoji-json'

export default function virtualGitmojiJson(): Plugin {
  return {
    name: 'virtual-gitmoji-json',
    enforce: 'pre',
    resolveId(id) {
      if (id === MODULE_ID) {
        return id
      }
      return null
    },
   async load(id) {
      if (id === MODULE_ID) {
        const gitmojiJson = await fetchGitmojiJson()
        return `export default ${JSON.stringify(gitmojiJson)}`
      }
      return null
    },
  }
}

async function fetchGitmojiJson() {
  const res = await fetch('https://gitmoji.dev/api/gitmojis')
  const data = await res.json() as GitmojiJson
  return data.gitmojis
}
