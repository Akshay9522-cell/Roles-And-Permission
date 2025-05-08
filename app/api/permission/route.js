'use server'

import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()


export async function POST(req){

    try {
         const data=await req.json()
         console.log(data)
         const{roleID,permission}=data

         if (!roleID || !permission) {
            return Response.json({ error: 'Role ID and permission are required' }, { status: 400 });
          }
      
          const roledata = await prisma.role.findUnique({
            where: { id: roleID },
          });
      
          const index = roledata.permissions.indexOf(permission);
          if (index > -1) {
            const updatedPermissions = roledata.permissions.filter((perm) => perm !== permission);
            const updatedRole = await prisma.role.update({
              where: { id: roleID },
              data: {
                permissions: {
                  set: updatedPermissions,
                },
              },
            });
      
            return Response.json({ message: 'permission removed successfully' }, { status: 200 });
          } else {
            const updatedRole = await prisma.role.update({
              where: { id: roleID },
              data: {
                permissions: {
                  set: roledata.permissions.concat(permission),
                },
              },
            });
      
         return Response.json({success:true,message:'server is on'})
        }
    } catch (error) {
        return Response.json({success:false,message:'server is OFF'})
    }
}