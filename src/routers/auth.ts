import express from 'express'
const router = express.Router()
import {UserLogin, UserRegister, CerrentUser} from '../controllers/auth'
import { Authcheck,Admincheck } from '../middenware/auth-admin-check'
router.post('/register', UserRegister)
router.post('/login', UserLogin)
router.post('/currentuser', Authcheck,CerrentUser)
router.post('/currentadmin', Authcheck,Admincheck,CerrentUser)

export default router