'use server'

import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()

export async function POST(req){
     
    try {
        const data=await req.json()
        console.log(data)

        const{userID,roleID}=data

        const user=await prisma.user.update({
            where:{id:userID},
            data:{roleId:roleID}
        })
        return Response.json({success:true,message:"fine",data:user})
    } catch (error) {
        
    }
}