import { Request, Response } from "express"
import prisma from "../config/prisma"
import { AddtoCartBody } from "../types/cart"

export const Getuser = async (req: Request, res: Response) => {
    try {
        const listuser = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                enabled: true,
                address: true
            }
        })
        console.log(listuser)

        res.send(listuser)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const ChangstatusUser = async (req: Request, res: Response) => {
    try {
        const { id, enabled } = req.body


        const changstatusupdate = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                enabled: enabled
            }
        })
        console.log(changstatusupdate)
        res.status(200).json({
            message: 'Update ChangStaus success',
            changstatusupdate
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const ChangroleUser = async (req: Request, res: Response) => {
    try {
        const { id, role } = req.body
        console.log(id, role)

        const Updateroleuser = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                role: role
            }
        })
        console.log(Updateroleuser)
        res.status(200).json({
            message: 'Updateroleuser success',
            Updateroleuser
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}
export const Addusercart = async (req: Request<{}, {}, AddtoCartBody>, res: Response) => {
    try {
        const { cart } = req.body
        console.log(cart)
        console.log(req.user?.id)

        const users = await prisma.user.findFirst({
            where: {
                id: Number(req.user?.id)
            }
        })
        console.log(users)

        if (!users) {
            return res.status(400).json({ message: 'User not found' })
        }

        const productoncart = await prisma.productOnCart.deleteMany({
            where: {
                cart: {
                    userId: users.id
                }
            }
        })

        const carts = await prisma.cart.deleteMany({
            where: {
                userId: users.id
            }
        })
        console.log(carts)

        let products = cart.map((itemp) => ({
            productId: itemp.id,
            count: itemp.count,
            price: itemp.price
        }))

        let Cartotal = products.reduce((sum, itemp) =>
            sum + itemp.price * itemp.count, 0)

        console.log(Cartotal)

      const newcart = await prisma.cart.create({
        data:{
            products: {
                create: products
            },
            cartTotal: Cartotal,
            userId: users.id
          
        }
      })
      console.log(newcart)



        console.log(productoncart)

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