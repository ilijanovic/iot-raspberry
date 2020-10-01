import { Router } from 'express'
const router = Router()

import { loginHandler } from '../controllers/login'
import { registerHandler } from '../controllers/register'
import { auth } from '../controllers/auth'
import { addModuleHandler, deleteModuleHandler } from '../controllers/module'
import { logoutHandler } from '../controllers/logout'

/**
 * @route   /api/login
 * @type    POST
 * @desc    Login into the website
 */

router.post('/login', loginHandler)

/**
 * @route   /api/logout
 * @type    POST
 * @desc    Logs the user out
 */

router.post('/logout', logoutHandler)

/**
 * @route   /api/register
 * @type    POST
 * @desc    Register on the website
 */

router.post('/register', registerHandler)

/**
 * @route   /api/addModule
 * @type    POST
 * @desc    Adds a new module to the user
 */

router.post('/addModule', auth, addModuleHandler)

/**
 * @route   /api/deleteModule
 * @type    POST
 * @desc    Deletes an module
 */

router.post('/deleteModule', auth, deleteModuleHandler)

export default router
