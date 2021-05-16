import { login } from 'api/auth';
import React, { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  setToken: Dispatch<SetStateAction<string | undefined>>
}

export default function Login ({setToken}: Props) {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const token = await login({
      username,
      password
    });
    setToken('token123');
  }

  return (
    <div className="max-w-xs mt-16 m-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label  className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input onChange={e => setUserName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
            </div>
            <div className="flex items-center justify-between">
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign In
                </button>
            </div>
        </form>
    </div>
  )
}
