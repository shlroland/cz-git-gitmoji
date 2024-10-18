import { Plugin } from '@commitlint/types';
import { gitmojiRule } from './rule';

export const gitmojiPlugin: Plugin = {
  rules: {
    'valid-gitmoji-type': gitmojiRule,
  },
};
