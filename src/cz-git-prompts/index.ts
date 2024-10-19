import { UserConfig } from "cz-git";
import { createGitmojiTypesPrompt, formatMessage } from "./factory";

export default {
  prompt: {
    alias: { fd: '✏️: fix typos', uv: '🔖: update versions' },
    messages: {
      type: "Select an emoji that represents a type of change that you\'re committing:",
      scope: 'Select the scope of this change (optional):',
      subject: 'Write a short, imperative tense description of the change (required):',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect:
        'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      generatingByAI: 'Generating your AI commit subject...',
      generatedSelectByAI: 'Select suitable subject by AI generated:',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    typesSearchValue: false,
    types: createGitmojiTypesPrompt(),
    useEmoji: true,
    emojiAlign: 'left',
    themeColorCode: '38;5;220',
    scopes: [],
    allowBreakingChanges: [':boom:'],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    formatMessageCB(messageMod) {
      return formatMessage(messageMod)
    },
  }
} satisfies UserConfig
