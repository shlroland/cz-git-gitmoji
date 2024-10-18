import type { LintOptions } from '@commitlint/types'
import { gitmojiCodeRegex, gitmojiUnicodeRegex, emojiRegex } from '@gitmoji/gitmoji-regex';
import { gitmojiPlugin } from './plugin';

const gitmojiCodeStr = gitmojiCodeRegex.source;
const gitmojiUnicodeStr = gitmojiUnicodeRegex.source;
const emojiStr = emojiRegex.source;


const parserOpts: LintOptions['parserOpts'] = {
  headerPattern:
   new RegExp(`^(?<emojiType>${gitmojiCodeStr}|(?:${gitmojiUnicodeStr})|(?:${emojiStr}))\\s?(?:\\((?<scope>.*)\\))?!?:\\s(?<subject>.+)$`),
  headerCorrespondence: ['emojiType', 'scope', 'subject'],
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertPattern: /^(?<emojiType>⏪️|:rewind:):\\s(?<subject>[\s\S]*?)\s*This reverts commit (?<hash>\w+)\./i,
  revertCorrespondence: ['subject', 'hash'],
}

export const parserPreset: LintOptions = {
  parserOpts,
  plugins: {
    gitmoji: gitmojiPlugin,
  },
}
