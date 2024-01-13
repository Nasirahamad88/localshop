"use client"

import React from 'react'
import ImportField from './ImportField'
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useSession, signIn, signOut } from 'next-auth/react';



function Navbar() {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
      <>
          <section className='flex justify-between mt-2 '>
              <div href="/" className=" px-2 py-2 font-bold text-xl text-black-900 rounded-full bg-slate-300 hover:bg-white">
                  <div className='flex'><AiOutlineMenuUnfold className='flex' /> Local-Store
                </div>
              </div>
              <div>
                  <nav className="flex" /* ... */>
                    <div className="flex items-center">
                    <a >
                       <ImportField/>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center">
                    <a href="#" className="ml-4 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                     Home
                     </a>
                    <a href="#" className="ml-4 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                     Explore
                     </a>
                     <a href="#" className="ml-4 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Create
                        </a>
                    <a href="#" className="ml-4 px-3 py-2  rounded-full text-blue-700 hover:bg-gray-100 hover:text-gray-700">
                    
                           <CgProfile className='blue-600 h-6 w-6 '/> 
                     </a>
                    </div>
                    <div className="flex items-center">
                    <button onClick={()=>signIn()} className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Sign Up
                    </button>
                    </div>
                    </nav>
              </div>
                  
          </section>
    </>
  )
}

export default Navbar