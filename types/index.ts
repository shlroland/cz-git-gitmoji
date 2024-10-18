export interface Gitmoji {
  emoji: string
  entity: string
  code: string
  description: string
  name: string
  semver: string | null
}

export interface GitmojiJson {
  gitmojis: Gitmoji[]
}
