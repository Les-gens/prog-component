import { getUser, getUserFriends, getUserPosts } from 'api/userAPI'
import { Post } from 'models/Post.js'
import { User } from 'models/User'
import React, { useEffect, useState } from 'react'
import {FriendListItem} from './components/index.js'

const Profile = () => {
  const [friend_list, setFriendList] = useState<User[]>([])
  const [post_list, setPostList] = useState<Post[]>([])
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(getUser(1))
    // const l = getUserFriends(1)
    // console.log(l)
    setFriendList(getUserFriends(1))
    setPostList(getUserPosts(1))
  }, [])
  return (
    <div className="w-full h-full">

      <div className='flex flex-col w-full h-32 bg-gray-800  justify-end '>
        <div className='flex align-center h-1/3 pl-4'>

          <h1 className='text-white text-3xl pr-4 '>{user ? user.username : 'Loading...'}</h1>
          <button className='text-green-600 self-center rounded-2xl border-green-600 border-2 h-6 w-28 hover:bg-gray-700'>+ Add Friend</button>
          {/* <button className='flex text-blue-400 self-center rounded-2xl border-blue-400 border-2 h-6 w-14 justify-center hover:bg-gray-700'>Friend</button> */}
        </div>
      </div>


      <div className='flex flex-row w-full justify-around'>
        <div className='w-2/12'></div>
        <div className='flex flex-col w-8/12 items-center'>
          <h1 className='text-3xl'>Posts</h1>
          {post_list !== [] ?
            post_list.map( (post, idx) => <div key={'post_'+idx}>{post.title}</div>)
          : ''}
        </div>
        <div id='friend_list' className='w-2/12 flex flex-col self-end'>

          <h2 className='text-2xl'>Friends</h2>
          {friend_list !== [] ? (
            friend_list.map( (friend,idx) => <FriendListItem key={'friend_'+idx} user={friend}/>)
            ) : (
              ''
              )}
        </div>
      </div>
    </div>
  )
}

export default Profile
