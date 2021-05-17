import { createPost } from 'api/postAPI';
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

export default function CreatePost () {

  let history = useHistory();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await createPost({title, text: content});
    history.push('/');
  }

  return (
        
      <div className="max-w-xs mt-16 m-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <h1 className='text-center text-xl'>Create Post</h1>
            <div className="mb-4">
                <label  className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="post Title">
                    Title
                </label>
                <input onChange={e => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="post Title"></input>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Content
                </label>
                <textarea onChange={e => setContent(e.target.value)} className="shadow appearance-none border rounded w-full h-16 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"placeholder="post Content"></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create Post
                </button>
                
            </div>
        </form>
    </div>
      
  )
}
