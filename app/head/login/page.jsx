'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Toaster,toast } from 'react-hot-toast'


export default function () {
  
    const router=useRouter()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')


     async function handleSubmit(e) {
        e.preventDefault()
       let api='/api/login'

       await axios.post(api,{email:email,password:password}).then((res)=>{
          console.log(res.data)
          toast.success("login successfully ")
          router.push('/head/dashboard')
          
       })
     }

  return (
    <div>
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
        
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
  
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>
  
      <button
        onClick={handleSubmit}
        className="w-full bg-gray-500 transform hover:scale-105 hover:rotate-5 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Save
      </button>
    </form>
  </div>
  <Toaster/>
    </div>
  )
}
