import type { LintOptions } from '@commitlint/types'
import { emojiRegex, gitmojiCodeRegex, gitmojiUnicodeRegex } from '@gitmoji/gitmoji-regex'
import { gitmojiPlugin } from './plugin'

const gitmojiCodeStr = gitmojiCodeRegex.source
const gitmojiUnicodeStr = gitmojiUnicodeRegex.source
const emojiStr = emojiRegex.source

const headerPattern = new RegExp(`^(?<emojiType>${gitmojiCodeStr}|(?:${gitmojiUnicodeStr})|(?:${emojiStr}))\\s?(?:\\((?<scope>.*)\\))?!?:?\\s(?<subject>.+)$`)

const parserOpts: LintOptions['parserOpts'] = {
  headerPattern,
  headerCorrespondence: ['emojiType', 'scope', 'subject'],
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertPattern: /^(?<emojiType>⏪️|:rewind:):\s(?<subject>[\s\S]*?)\sThis reverts commit (?<hash>\w+)\./i,
  revertCorrespondence: ['subject', 'hash'],
}

export const parserPreset: LintOptions = {
  parserOpts,
  plugins: {
    gitmoji: gitmojiPlugin,
  },
}
