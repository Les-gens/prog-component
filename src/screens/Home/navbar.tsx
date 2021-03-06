import React, { Fragment, ReactComponentElement } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { getAllPosts } from 'api/postAPI'
import Post from 'screens/Posts/post'
const _ = require('lodash')



function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface navBarProps {
  posts?: any, 
  setPosts?: Function
}

export default function NavBar (props: navBarProps) {

  async function handleChange(search: string) {
      if(props.posts) {
        console.log(search);
        
        const allPosts = await getAllPosts()
        const postsArray: any = []
        if(allPosts != null) {
          const postsFormatted = allPosts.filter((post: any) => post.title.toLowerCase().startsWith(search.toLowerCase()))
          postsFormatted.forEach((post: any) => {
            if(!post.private_post) {
              postsArray.push(
                <Post title={post.title} content={post.text} isLoading={false}></Post>
              )
            }     
          })
          postsArray.reverse()
          if(props.setPosts) props.setPosts(postsArray)
        }
      } 
  }
  return (
    <Disclosure as="nav" className="bg-blurple">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <Link to='/home' className="flex-shrink-0 font-bold text-white">Social Media</Link>
            </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      onChange={_.debounce((e:any) => handleChange(e.target.value), 1000)}
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open
                    ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                      )
                    : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                           <UserCircleIcon className="h-8 w-8 "></UserCircleIcon>
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                              <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="createPost"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Add blog post
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link to='/me' className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                )}>Your Profile</Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link to='/logout' className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                )}>Logout</Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a
                href="createPost"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Add Blog post
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                <UserCircleIcon className="h-10 w-10"></UserCircleIcon>
                </div>
                <div className="ml-3">
                  <div className="text-base font-bold text-white">Username</div>
                  <div className="text-sm font-medium text-white">user mail</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
              <a
                  href="createPost"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  Create Post
                </a>
                <a
                  href="me"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
