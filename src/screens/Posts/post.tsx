import React from 'react'

interface IPost {
    title?: String,
    content?: String,
    author?: String,
    isPrivate?: Boolean,
    isLoading: Boolean,

}

export default function Post (props: IPost) {
  const isLoading = props.isLoading
  if (isLoading) {
    return (
        <div className="w-7/12 m-auto mt-4 p-4 bg-white shadow rounded-lg">

            <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

            <div className="grid grid-cols-4 gap-1">
                <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    )
  } else {
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
}
