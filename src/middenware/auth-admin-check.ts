
import {Request,Response,NextFunction } from "express"
import jwt from 'jsonwebtoken'
// import { Authrequire } from "../types/auth-request"
import prisma from "../config/prisma"

export const Authcheck = async(req: Request, res: Response, next: NextFunction) =>{
    try {
        const headers = req.headers.authorization
        console.log('Authorization in success')
       if(!headers){
        return res.status(401).json({message:'Token is not'})
       }

       const token = headers.split(" ")[1]
    
       const recrit = process.env.SELETE

       if(!recrit){
        return res.status(400).json({message: 'SELETE is not Definde'})
       }
       const decoded = jwt.verify(token, recrit) as {
        id: number
        role: string
        email: string
       }
       req.user = decoded
    

       const user = await prisma.user.findFirst({
        where:{
            email: req.user.email
        }
       })

       if(!user || !user.enabled){
        return res.status(400).json({message: 'Account is not found'})
       }

       next()
     
    }catch(err){
        console.log(err)
        res.status(401).json({message:'Token invalid'})
    }
}

export const Admincheck = async(req: Request, res: Response, next: NextFunction) =>{
    try{
        
        const email = req.user?.email
         
         if(!email){
             return res.status(401).json({message:'Unauthrizad'})
         }
        
        const useremail = await prisma.user.findFirst({
            where:{
                email: email
            }
        })

         if(!useremail || useremail.role !== 'admin'){
            return res.status(400).json({message:'Account: Not admin!'})
         }

        next()
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Admin account not found'})
    }
}










































// import { Response, NextFunction } from "express"
// import { AuthRequest } from "../types/auth-request"
// import jwt from "jsonwebtoken"
// import prisma from "../../config/prisma"

// export const autocheck = async (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const headerToken = req.headers.authorization

//     if (!headerToken) {
//       return res.status(401).json({ message: "No token authorization" })
//     }

//     const token = headerToken.split(" ")[1]
    
//     const secret = process.env.SELETE
//     if (!secret) {
//       throw new Error("JWT_SECRET not defined")
//     }
//       const decoded = jwt.verify(token, secret) as {
//       id: number
//       role: string
//       email:string
//     }
//         req.user = decoded

//     const user = await prisma.user.findFirst({
//       where: {
//         email: req.user.email
//       }
//     })

//     if (!user || !user.enabled) {
//       return res.status(400).json({ message: "This account cannot access" })
//     }

//     next()
//   } catch (err) {
//     console.log(err)
//     res.status(401).json({ message: "Token invalid" })
//   }
// }