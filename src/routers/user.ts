import express from 'express'
const router = express.Router()
import {Getuser,ChangstatusUser,ChangroleUser,Addusercart,Getusercart,emtyremovecart,AdduserAddress,Saveuserorder,Getuserorder} from '../controllers/user'
import {autocheck} from '../middenware/auth-admin-check'

router.get('/users',autocheck,Getuser)
router.post('/userchangstatus', ChangstatusUser)
router.post('/changroleuser', ChangroleUser)
router.post('/addusercart', Addusercart)
router.get('/getusercart', Getusercart)
router.delete('/emtyremovecart', emtyremovecart)
router.post('/adduseraddress', AdduserAddress)
router.post('/saveuserorder', Saveuserorder)
router.get('/getuserorder', Getuserorder)


export default router