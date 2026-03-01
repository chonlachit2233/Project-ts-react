import express from 'express'
const router = express.Router()
import {Changorderstatus, Listorderstatus} from '../controllers/admin'
import { Authcheck } from '../middenware/auth-admin-check'

router.put('/user/order', Authcheck, Changorderstatus)
router.put('/admin/orders', Authcheck,Listorderstatus)

export default router