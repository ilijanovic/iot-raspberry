import { Router } from 'express'
const router = Router()

import { loginHandler } from '../controllers/login'
import { registerHandler } from '../controllers/register'
import { auth } from '../controllers/auth'

router.post('/login', loginHandler)
router.post('/register', registerHandler)
export default router
