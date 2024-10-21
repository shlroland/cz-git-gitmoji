import { type LintOptions, type Plugin, type QualifiedRules, RuleConfigSeverity } from '@commitlint/types'
import { parserPreset } from './parser'
import { gitmojiPlugin } from './plugin'
import { gitmojiUnicode } from './rule'

const rules: QualifiedRules = {
  // gitmoji rule
  'valid-gitmoji-type': [RuleConfigSeverity.Error, 'always'],
  // use gitmoji type
  'type-enum': [RuleConfigSeverity.Error, 'always', gitmojiUnicode],
  // content start with blank line
  'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
  // end with blank line
  'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
  // title max length 100 characters
  'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
  // Scope always lower case
  'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
  // subject can not be empty
  'subject-empty': [RuleConfigSeverity.Error, 'never'],
  // subject can not use dot
  'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
}

const config: { plugins: Plugin[], parserPreset: LintOptions, rules: QualifiedRules } = {
  rules,
  parserPreset,
  plugins: [gitmojiPlugin],
}

export default config
