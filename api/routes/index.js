import { Router } from 'express'
const router = Router()

import { loginHandler } from '../controllers/login'
import { registerHandler } from '../controllers/register'
import { auth } from '../controllers/auth'

/**
 * @route   /api/login
 * @type    POST
 * @desc    Login into the website
 */

router.post('/login', loginHandler)

/**
 * @route   /api/register
 * @type    POST
 * @desc    Register on the website
 */

router.post('/register', registerHandler)

export default router
