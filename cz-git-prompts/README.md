# cz-git-prompts

a gitmojis adapter for cz-git prompts

## Install

```bash
pnpm add -D cz-git-prompts
```

## Usage
Ensure you have `czg` cli or `commitizen` + `czg-git` installed.
Echo the following code to your commitlint config(e.g.`commitlint.config.js`) or czg config(e.g. `cz.config.js`):

```ts
// for `commitlint.config.js`
import promptsConfig from 'cz-git-prompts'

export default {
  // ...
  ...promptsConfig,
}

// for `cz.config.js`
export default {
  // ...
  ...promptsConfig.prompt,
}
```

About `cz-git` prompts, see [cz-git](https://cz-git.qbb.sh/)
