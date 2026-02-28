import express, { Request, Response } from 'express'
const router = express.Router()
import { CategoryCreate, Listcategory, Removecategory } from '../controllers/category'

router.post('/category', CategoryCreate)
router.get('/category', Listcategory)
router.delete('/category/:id', Removecategory)

export default router