import React from 'react'

interface IPost {
    title: String,
    content: String,
    author: String,
    isPrivate: Boolean,

}

export default function Post (props: IPost) {
  return (
        <div className="w-7/12 m-auto mt-4 p-4 bg-white shadow rounded-lg">
            <div className="flex">
            <div className="text-4xl font-bold uppercase">{props.title}</div>
            {props.isPrivate
              ? <div className=" self-center ml-4 text-xs m-auto font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
                  Private
                </div>
              : ''}
            </div>
            <div className="author italic font-bold ">By: {props.author}</div>
            <div className="font-medium">{props.content}</div>
        </div>
  )
}
