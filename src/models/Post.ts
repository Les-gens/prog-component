export class Post {
  id: number
  title: string
  content?: string

  constructor(id: number, title: string, content: string) {
    this.title = title
    this.id = id
    this.content = content
  }
}
