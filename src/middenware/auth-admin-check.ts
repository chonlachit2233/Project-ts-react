import { Response, NextFunction } from "express"
import { AuthRequest } from "../types/auth-request"
import jwt from "jsonwebtoken"
import prisma from "../../config/prisma"

export const autocheck = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const headerToken = req.headers.authorization

    if (!headerToken) {
      return res.status(401).json({ message: "No token authorization" })
    }

    const token = headerToken.split(" ")[1]
    
    const secret = process.env.SELETE
    if (!secret) {
      throw new Error("JWT_SECRET not defined")
    }
      const decoded = jwt.verify(token, secret) as {
      id: number
      role: string
      email:string
    }
        req.user = decoded

    const user = await prisma.user.findFirst({
      where: {
        email: req.user.email
      }
    })

    if (!user || !user.enabled) {
      return res.status(400).json({ message: "This account cannot access" })
    }

    next()
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: "Token invalid" })
  }
}