'use server'

import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export async function POST(req){
     
     try {
        const data=await req.json()
            console.log(data)

            const{role}=data

            const roleData=await prisma.role.create({
                data:{name:role}
            })

            return Response.json({success:true,message:'server is underControll',data:roleData})
        
     } catch (error) {
        return Response.json({success:false,message:"server is overLoaded"})      
     }
}


export async function GET(req) {
    
    try {
        
        const allRole=await prisma.role.findMany()

        console.log(allRole)
        return Response.json({success:true,message:"system underControll",data:allRole})
    } catch (error) {
        return Response.json({success:false,message:"system  is outofControll"})
    }
}