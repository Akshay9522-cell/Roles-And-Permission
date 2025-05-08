'use client'
import axios from 'axios'
import { AsyncCallbackSet } from 'next/dist/server/lib/async-callback-set'
import React, { useEffect, useState } from 'react'

export default function page() {

       const[show,setShow]=useState([])
        async function getRole(){

            let api='/api/role'

            await axios.get(api).then((res)=>{
                console.log(res.data.data)
                setShow(res.data.data)
            })
        }

        useEffect(()=>{
            getRole()
        },[])

        async function  handleCheck(roleID,permission) {
            
            let api='/api/permission'

            await axios.post(api,{roleID,permission}).then((res)=>{
                console.log(res.data)
            })
        }
     
  return (
    <>
    <div className="p-6 overflow-x-auto">
  <table className="min-w-full bg-white rounded-lg shadow-md">
    <thead>
      <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
        <th className="py-3 px-6">Role</th>
        <th className="py-3 px-6">Edit</th>
        <th className="py-3 px-6">Read</th>
        <th className="py-3 px-6">Delete</th>
        <th className="py-3 px-6">Update</th>
        <th className="py-3 px-6">Manage Admins</th>
        <th className="py-3 px-6">Manage Vendors</th>
        <th className="py-3 px-6">manage Products</th>
        <th className="py-3 px-6">Actions</th>
      </tr>
    </thead>
    <tbody className="text-gray-600">
{

  show.map((e)=>{
      
    return(
       <>
         <tr className="border-b hover:bg-gray-50">
    <td className="py-4 px-6 font-medium">{e.name}</td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600" onChange={()=>{handleCheck(e.id,'role')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600" onChange={()=>{handleCheck(e.id,'edit')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600" onChange={()=>{handleCheck(e.id,'read')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600" onChange={()=>{handleCheck(e.id,'delete')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600" onChange={()=>{handleCheck(e.id,'update')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600"  onChange={()=>{handleCheck(e.id,'manageAdmins')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600"  onChange={()=>{handleCheck(e.id,'manageVendors')}} />
    </td>
    <td className="py-4 px-6 text-center">
   <input type="checkbox" className="h-4 w-4 text-blue-600" onChange={()=>{handleCheck(e.id,'manageProducts')}} />
    </td>   

</tr>
       </>
    )
  

  })      

   

    }
       
     
    
    </tbody>
  </table>
</div>

    </>
  )
}
