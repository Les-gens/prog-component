import { getUser, getUserFriends } from 'api/userAPI'
import { User } from 'models/User'
import React, { useEffect, useState } from 'react'
import FriendListItem from './components/FriendListItem'

const Profile = () => {
  const [friend_list, setFriendList] = useState<User[]>([])
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(getUser(1))
    // const l = getUserFriends(1)
    // console.log(l)
    setFriendList(getUserFriends(1))
  }, [])
  return (
    <div className="w-full h-full">
      <div className='flex flex-col w-full h-32 bg-green-800  justify-end pl-4 pb-4'>
        <button>+ Add Friend</button>
        <h1 className='text-white text-3xl'>{user ? user.username : 'Loading...'}</h1>
      </div>

      {friend_list !== [] ? '' : ''}

      {friend_list !== [] && friend_list[0] !== undefined ? (
        friend_list.map( (friend,idx) => <FriendListItem key={idx} user={friend}/>)
      ) : (
        ''
      )}
    </div>
  )
}

export default Profile
