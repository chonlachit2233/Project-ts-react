import express from 'express'
const router = express.Router()
import {UserLogin, UserRegister, CerrentUser} from '../controllers/auth'

router.post('/register', UserRegister)
router.post('/login', UserLogin)
router.post('/currentuser', CerrentUser)
router.post('/currentadmin', CerrentUser)

export default router