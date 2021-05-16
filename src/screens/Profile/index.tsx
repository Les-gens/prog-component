import { getUser } from 'api/userAPI'
import { User } from 'models/User'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [friend_list, setFriendList] = useState<User[]>([])
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(getUser(1))
    setFriendList((prevFriends) => [...prevFriends, new User(1, 'toto')])
    setFriendList((prevFriends) => [...prevFriends, new User(2, 'titi')])
  }, [])
  return (
    <div className="w-full h-full">
      <h1></h1>
      {friend_list !== [] && friend_list[0] !== undefined ? (
        <div id="friends_list">{friend_list[0].username}</div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Profile
