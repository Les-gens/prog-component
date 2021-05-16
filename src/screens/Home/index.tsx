import React from 'react'
import Navbar from './navbar'
import Post from '../Posts/post'

export default function Home () {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <Post isLoading={true}></Post>
    </div>
  )
}
