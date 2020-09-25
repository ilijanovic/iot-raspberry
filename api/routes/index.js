import { Router } from 'express'
const router = Router()

import { loginHandler } from '../controllers/login'
import { registerHandler } from '../controllers/register'
import { auth } from '../controllers/auth'

// Route: /api/login
router.post('/login', loginHandler)

// Route: /api/register
router.post('/register', registerHandler)

export default router
