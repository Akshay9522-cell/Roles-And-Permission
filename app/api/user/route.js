'use server'

import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export async function POST(req) {
    
    try {
        const data=await req.json()
        console.log(data)

        const {name,email,password}=data

        const userData=await prisma.user.create({
            data:{name,email,password}
        })
        console.log(userData)
        return Response.json({success:true,message:"all is well",data:userData})
    } catch (error) {
        return Response.json({success:false,message:"all is not well"})
    }
}


 export async function GET(req) {
    
     try {
         
         const data=await prisma.user.findMany({
            include: {
                role: true,
              },
         })
         

         return Response.json({success:true,message:"fine",data:data})
     } catch (error) {
        return Response.json({success:false,message:"unfine"})
        
     }
 }