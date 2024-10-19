import { Rule } from '@commitlint/types';
import { gitmojis } from 'gitmojis';

 const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export const gitmojiUnicode: string[] = gitmojis.map((gitmoji) => gitmoji.emoji);

export const gitmojiRule: Rule = (parsed) => {
  let errorMsg = 'passed';
  let pass;

  const { type } = parsed;

  if (!type) {
    pass = false;
    errorMsg = 'Your commit type is empty, please add your commit message.';
    return [pass, errorMsg];
  }

  pass = gitmojiUnicode.includes(type) || gitmojiCodes.includes(type);

  if (!pass) {
    errorMsg = `${type} is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.`;
  }

  return [pass, errorMsg];
};
