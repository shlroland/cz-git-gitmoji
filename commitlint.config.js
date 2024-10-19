import { tsImport } from 'tsx/esm/api'

const commitlintConfig = (await tsImport('./src/commitlint/index.ts', import.meta.url)).default

const promptsConfig = (await tsImport('./src/cz-git-prompts/index.ts', import.meta.url)).default

export default { ...commitlintConfig, ...promptsConfig }
