// import { Request } from "express";


export interface Authcheck {
    id: number
    role: string
    email: string
}

// export interface Authrequire<T = any> extends Request {
//     user?: Authcheck
//     body: T
// }


























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