'use server'

import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()
   
export async function POST(req){

     const data=await req.json()
     console.log(data)
      
     const{email,password}=data

     const user= await prisma.user.findFirst({
        where:{email:email}
     })
      if(!user){
        return Response.json({success:false,message:"user not found"})
    }

    if(user.password!=password){
          return Response.json({success:false,message:"password is invalid"})
    }

     return Response.json({success:true,message:"system is under controll",data:user})
}
     
