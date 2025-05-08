'use client'

import axios from 'axios'
import { Asul } from 'next/font/google'
import React, { useEffect, useState } from 'react'

export default function page() {
      
     const[user,setUser]=useState([])
     const[roles,setRoles]=useState([])
   

     async function  userData() {
        
         let api='/api/user'

         await axios.get(api).then((res)=>{
            console.log(res.data)
            setUser(res.data.data)
         })
     }

      async function userRole() {
        
         let api='/api/role'

         await axios.get(api).then((res)=>{
            console.log(res.data)
            setRoles(res.data.data)
         })
      }
     useEffect(()=>{
        userData()
        userRole()
     },[])

    async function handleRole(userID,roleID){
          
        let api='/api/assignRole'

        await axios.post(api,{userID,roleID}).then((res)=>{
            console.log(res.data)
        })

    }

  return (
    <div>
      <h1>Rolls allotment</h1>

      <div className="p-6 overflow-x-auto">
  <table className="min-w-full bg-white rounded-lg shadow-md">
    <thead>
      <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
        <th className="py-3 px-6 text-left">Users</th>
        <th className="py-3 px-6 text-left">Roles</th>

      </tr>
    </thead>
    <tbody className="text-gray-600">
      {user.map((k) => (
        <tr key={k.id} className="border-b hover:bg-gray-50">
          <td className="py-4 px-6">{k.name}</td>
          <td className='p-2 border'>
                                    <select
                                       onChange={(e)=>handleRole(k.id,e.target.value)}
                                        className='border p-2'
                                        
                                    >
                                        <option value=''>Select Role</option>
                                        {roles.map((role) => (
                                            <option key={role.id} value={role.id}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<h1 className='text-3xl font-bold mb-4 mt-4 text-center'>All Users</h1>
            <div className='bg-white rounded-lg shadow-md p-4'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='p-2 border'>Name</th>
                            <th className='p-2 border'>Email</th>
                            <th className='p-2 border'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user) => (
                            <tr key={user.id} className='odd:bg-white even:bg-gray-100'>
                                <td className='p-2 border'>{user.name}</td>
                                <td className='p-2 border'>{user.email}</td>
                                <td className='p-2 border'>{user.roleId ? user.role.name : 'No Role Assigned'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}
