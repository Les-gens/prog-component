import React from 'react'
import Navbar from './navbar'
import Post from '../Posts/post'

export default function Home () {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <div className="py-16">
        <div className="font-bold text-6xl text-center">
          Latest Posts
      <Post isLoading={true}></Post>
        </div>
      </div>
    </div>
  )
}
