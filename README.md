# cz-git-gitmoji

A few configurations for using gitmojis in cz

## commitlint

a gitmojis config for commitlint

### Install

```bash
pnpm add -D commitlint-config-czg-gitmoji
```

### Usage

Ensure you have commitlint installed.Echo the following code to your commitlint config
(e.g. `commitlint.config.ts` , `commitlint.config.js` or `.commitlintrc.js`):

```ts
export default {
  extends: ['czg-gitmoji'],
}

// for cjs
module.exports = {
  extends: ['czg-gitmoji'],
}
```

Inspired by [commitlint-config-gitmoji](https://www.npmjs.com/package/commitlint-config-gitmoji)

## cz-git-prompts

a gitmojis adapter for cz-git prompts

### Install

```bash
pnpm add -D cz-git-prompts
```

### Usage
Ensure you have `czg` cli or `commitizen` + `czg-git` installed.
Echo the following code to your commitlint config(e.g.`commitlint.config.js`) or czg config(e.g. `cz-config.js`):

```ts
// for `commitlint.config.js`
import promptsConfig from 'cz-git-prompts'

export default {
  // ...
  ...promptsConfig,
}

// for `cz-config.js`
export default {
  // ...
  ...promptsConfig.prompt,
}
```

About `cz-git` prompts, see [cz-git](https://github.com/Zhengqbbb/cz-git)

## Changelog and Release

> At present, the release process relies on `changesets`, and configuring the `semantic-release` tool requires some time to code.
