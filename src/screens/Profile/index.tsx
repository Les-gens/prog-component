import { getUser, getUserFriends, getUserPosts } from 'api/userAPI'
import { Post as PostModel} from 'models/Post.js'
import { User } from 'models/User'
import React, { useEffect, useState } from 'react'
import {FriendListItem} from './components/index.js'
import NavBar from 'screens/Home/navbar'

const Profile = () => {
  const [friend_list, setFriendList] = useState<User[]>([])
  const [post_list, setPostList] = useState<PostModel[]>([])
  const [user, setUser] = useState<User>()

  useEffect(() => {
    async function fetchData(){
      const user = await getUser(1)
      setUser(user)
    }
    fetchData()

    setFriendList(getUserFriends(1))
    setPostList(getUserPosts(1))
  }, [])
  return (
    <div className="w-full h-full">
      <NavBar/>

      <div className='flex flex-col w-full h-32 bg-blurple  justify-end '>
        <div className='flex align-center h-1/3 pl-4'>

          <h1 className='text-white text-3xl pr-4 '>{user ? user.username : 'Loading...'}</h1>
          <button className='text-white self-center rounded-2xl border-white-600 border-2 h-6 w-28 hover:bg-blue-800'>+ Add Friend</button>
          {/* <button className='flex text-blue-400 self-center rounded-2xl border-blue-400 border-2 h-6 w-14 justify-center hover:bg-gray-700'>Friend</button> */}
        </div>
      </div>


      <div className='flex flex-row w-full justify-around'>
        <div className='w-2/12'></div>
        <div className='flex flex-col w-8/12 items-center mt-6'>
          <h1 className='text-3xl'>Posts</h1>
          {post_list !== [] ?
            post_list.map( (post, idx) => <div className='mt-6 border-2 border-gray-200 w-30 h-28' key={'post_'+idx}><div>{post.title}</div><div>{post.content}</div></div>)
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
