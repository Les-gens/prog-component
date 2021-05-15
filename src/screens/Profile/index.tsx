import { User } from "models/User"
import React, { useEffect, useState } from "react"

interface Props {
  user: User
}
const Profile = ({ user }: Props) => {
  const [friend_list, setFriendList] = useState<User[]>([])
  useEffect(() => {
    setFriendList((prevFriends) => [...prevFriends, new User(1, "toto")])
    setFriendList((prevFriends) => [...prevFriends, new User(2, "titi")])
  }, [friend_list])
  return (
    <div className="w-full h-full">
      <h1></h1>
      {friend_list !== [] && friend_list[0] !== undefined ? (
        <div id="friends_list">{friend_list[0].username}</div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Profile
