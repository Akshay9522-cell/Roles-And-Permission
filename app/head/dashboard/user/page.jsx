'use client'
import axios from 'axios'
import React, { useState } from 'react'

export default function page() {

       const[name,setName]=useState('')
       const[email,setEmail]=useState('')
       const[password,setPassword]=useState('')


       async function userData(){
         
        console.log(name,email,password)

        let api='/api/user'

        await axios.post(api,{name,email,password}).then((res)=>{
            console.log(res.data)
        })

       }


  return (
   <>
   <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-6">
    <h1>User Details</h1>
  <div className="flex flex-col space-y-2">
    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
      Name
    </label>
    <input
      id="name"
      type="text"
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col space-y-2">
    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
      Email
    </label>
    <input
      id="email"
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col space-y-2">
    <label htmlFor="password" className="text-sm font-semibold text-gray-700">
      Password
    </label>
    <input
      id="password"
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    onClick={userData}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
  >
    Save User Data
  </button>
</div>

   </>
  )
}
