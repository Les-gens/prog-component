import { User } from 'models/User'
import React from 'react'

interface Props {
  user: User
}

const FriendListItem = ({user}: Props) => {
  return (
    <div>
      {user.username}
    </div>
  )
}

export default FriendListItem