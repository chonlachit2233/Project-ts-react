import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

export interface AuthUser {
    id: number
    role: string
    email: string
    
}

export interface AuthRequest extends Request{
    user?: AuthUser
}
// export interface AuthRequest extends Request {
//   user?: JwtPayload & { email: string }
// }