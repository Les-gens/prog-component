import { Post } from 'models/Post'
import React from 'react'

interface Props {
  post: Post
}

const PostListItem = ({post}: Props) => {
  return (
    <div>
      {post.title}
    </div>
  )
}

export default PostListItem