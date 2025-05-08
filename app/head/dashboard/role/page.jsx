
'use client'
import axios from 'axios'
import React, { useState } from 'react'

export default function page() {

      const[role,setRole]=useState('')
   

      async function handleRole(){
         
         let api='/api/role'

         await axios.post(api,{role:role}).then((res)=>{
             console.log(res.data)
         })
      }
  return (
    <>
   <div class="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-4">
  <h1 class="text-2xl font-bold text-gray-800">Role</h1>
  
  <div class="flex flex-col space-y-2">
    
    <input
      id="roleInput"
      type="text"
      onChange={(e)=>{setRole(e.target.value)}}
      value={role}
      class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
   onClick={handleRole}
    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
  >
    Save
  </button>
</div>

    </>
  )
}
