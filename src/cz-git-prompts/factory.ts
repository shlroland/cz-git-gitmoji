import type { TypesOption } from 'cz-git'
import json from 'virtual:gitmoji-json' assert { type: 'json' }

export function createGitmojiTypesPrompt(): TypesOption[] {
  return json.map((item) => ({
    value: item.emoji,
    name: `${item.emoji}  - ${item.description}`,
    emoji: item.code,
  }))
}
