import { Request, Response } from "express"

export const Getuser = async (req: Request, res: Response) => {
    try {
        res.send('Hello Listuser')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const ChangstatusUser = async (req: Request, res: Response) => {
    try {
        res.send('Hello ChangstatusUser')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const ChangroleUser = async (req: Request, res: Response) => {
    try {
        res.send('Hello ChangroleUser')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const Addusercart = async (req: Request, res: Response) => {
    try {
        res.send('Hello Addusercart')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const Getusercart = async (req: Request, res: Response) => {
    try {
        res.send('Hello Getusercart')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const emtyremovecart = async (req: Request, res: Response) => {
    try {
        res.send('Hello emtyremovecart')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const AdduserAddress = async (req: Request, res: Response) => {
    try {
        res.send('Hello AdduserAddress')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const Saveuserorder = async (req: Request, res: Response) => {
    try {
        res.send('Hello Saveuserorder')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const Getuserorder = async (req: Request, res: Response) => {
    try {
        res.send('Hello Getuserorder')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}