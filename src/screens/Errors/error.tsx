import React from 'react'
import { Link } from 'react-router-dom'

interface IError {
    errorCode: Number,
    errorTitle: String,
    errorDescription: String
}

export default function Error (props: IError) {
  return (
            <div className="min-h-screen bg-gradient-to-r from-red-600 via-pink-600 to-red-500 p-8">
                <div className="w-7/12 m-auto p-4 bg-white shadow rounded-lg flex flex-col items-center gap-y-4 text-center">
                        <div className="text-4xl md:text-9xl font-bold">{props.errorCode}</div>
                        <div className="text-2xl md:text-6xl font-medium">{props.errorTitle}</div>
                        <div className="text-xl text-center font-medium m-auto">
                            {props.errorDescription}
                        </div>
                        <div>
                            <Link to='/'>
                                <button className="bg-red-600 hover:bg-red-500 text-white font-bold text-xl py-2 px-4 rounded">
                                    Return Home
                                </button>
                            </Link>
                        </div>
                </div>
            </div>

  )
}
