import express from 'express'
const router = express.Router()
import {Createproduct, Listproduct, Readproduct, Updateproduct, Removeproduct, Listbyproduct, Searchbyproduct} from '../controllers/product'

router.post('/product',Createproduct)
router.get('/product/:count',Listproduct)
router.get('/products/:id',Readproduct)
router.put('/updateproduct/:id',Updateproduct)
router.delete('/product/:id',Removeproduct)
router.post('/productby',Listbyproduct)
router.post('/search/filters',Searchbyproduct)

export default router