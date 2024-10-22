# commitlint-config-czg-gitmoji

a gitmojis config for commitlint

## Install

```bash
pnpm add -D commitlint-config-czg-gitmoji
```

## Usage

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
