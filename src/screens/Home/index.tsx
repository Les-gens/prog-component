import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Post from '../Posts/post'
import { getAllPosts } from 'api/postAPI'

export default function Home () {

  const [posts, setPosts] =  useState([
    <Post key={0} isLoading={true}></Post>,
    <Post key={1} isLoading={true}></Post>,
    <Post key={2} isLoading={true}></Post>,
    <Post key={4} isLoading={true}></Post>,
  ])

  useEffect(() => {
    async function fetchData() {
      const postsData = await getAllPosts()
      const postsArray : any[] = [];
      if(postsData != null) {
        postsData.forEach((post: any) => {
          if(!post.private_post) {
            postsArray.push(
              <Post title={post.title} content={post.text} isLoading={false}></Post>
            )
          }     
        })
        setPosts(postsArray)
      }
      }
     
      fetchData()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <div className="py-16">
        <div className="font-bold text-6xl text-center">
          Latest Posts
          <div>
        {posts}

          </div>
        </div>
      </div>
    </div>
  )
}
