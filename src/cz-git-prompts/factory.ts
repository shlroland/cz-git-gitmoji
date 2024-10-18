import type { CommitMessageOptions, TypesOption } from 'cz-git'
import json from 'virtual:gitmoji-json' assert { type: 'json' }

export function createGitmojiTypesPrompt(): TypesOption[] {
  return json.map((item) => ({
    value: item.code,
    name: `${item.emoji}  - ${item.description}`,
    emoji: item.code,
  }))
}

function createGitmojiHeader(type: string, scope: string, subject: string) {
  return `${type}${scope ? ` (${scope}):` : ''} ${subject}`
}

function createGitmojiMessage(defaultHeader: string, body: string, breaking: string, footer: string) {
  let result = defaultHeader
  if (body)
    result += `\n\n${body}`

  if (breaking)
    result += `\n\nBREAKING CHANGE: ${breaking}`

  if (footer)
    result += footer
  return result
}

export function formatMessage({
  type,
  scope,
  subject,
  body,
  breaking,
  footer,
}: CommitMessageOptions) {
  return createGitmojiMessage(
    createGitmojiHeader(type, scope, subject),
    body,
    breaking,
    footer,
  )
}
