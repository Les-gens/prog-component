import { User } from 'models/User'
import React from 'react'

interface Props {
  user: User
}

const FriendListItem = ({user}: Props) => {
  return (
    <div className='border-1 border-gray-300'>
      {user.username}
    </div>
  )
}

export default FriendListItem