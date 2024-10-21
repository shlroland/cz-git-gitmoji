import { tsImport } from 'tsx/esm/api'

const commitlintConfig = (await tsImport('./commitlint/src/index.ts', import.meta.url)).default

const promptsConfig = (await tsImport('./cz-git-prompts/src/index.ts', import.meta.url)).default

export default { ...commitlintConfig, ...promptsConfig }
