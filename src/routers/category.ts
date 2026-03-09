import express, { Request, Response } from 'express'
const router = express.Router()
import { CategoryCreate, Listcategory, Removecategory } from '../controllers/category'
import {Authcheck, Admincheck} from '../middenware/auth-admin-check'

router.post('/category', Authcheck, Admincheck,CategoryCreate)
router.get('/category', Listcategory)
router.delete('/category/:id',Authcheck,Admincheck, Removecategory)

export default router