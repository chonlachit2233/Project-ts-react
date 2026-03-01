
import { Request, Response } from "express"
import prisma from "../config/prisma"

export const Changorderstatus = async (req: Request, res: Response) => {
    try {
        const { orderId, orderStatus } = req.body
        console.log(orderId, orderStatus)

        const upadtestatus = await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                orderstatus: orderStatus
            }
        })
        console.log(upadtestatus)
        res.json({ ok: true, upadtestatus })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}

export const Listorderstatus = async (req: Request, res: Response) => {
    try {
        const liststatus = await prisma.order.findMany({
            include: {
                products: {
                    include: {
                        product: true
                    }
                },
                user: {

                    select: {
                        id: true,
                        email: true,
                        address: true
                    }
                }
            }
        })
        res.json({ ok: true, liststatus })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
}