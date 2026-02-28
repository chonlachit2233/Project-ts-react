import jwt from 'jsonwebtoken'
import { Request,Response,NextFunction } from 'express'
import prisma from '../../config/prisma'

export const authCheck = async(req: Request, res: Response, next: NextFunction)=>{
    try{
     const headertoken = req.headers.authorization

     console.log('Auth check mindleware works!!')

     if(!headertoken){
        return res.status(401).json({message: 'No token Authorization!!!'})
     }

     const token = headertoken.split(" ")[1]
     const secret = process.env.SELETE
    if(!secret){
        return res.status(400).json('SECRET is not defind in eviroment variablis')
    }
    const decode = jwt.verify(token,secret)
    req.user = decode

    const user = await prisma.user.findFirst({
        where:{ 
            email: req.user.email
        }
    })

     next()
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}