import { Request } from "express";


export interface Authcheck {
    id: number
    role: string
    email: string
}

export interface Authrequire extends Request {
    user?: Authcheck
}


























// import { Request } from "express"

// export interface AuthUser {
//     id: number
//     role: string
//     email: string
    
// }

// export interface AuthRequest extends Request{
//     user?: AuthUser
// }
// // export interface AuthRequest extends Request {
// //   user?: JwtPayload & { email: string }
// // }