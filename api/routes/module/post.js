import { Router } from 'express'
const router = Router()

import { setDataHandler } from '../../controllers/setData'

/**
 * @route   /api/module/setData
 * @type    POST
 * @desc    Adds data to an chart
 */

router.post('/setData', setDataHandler)

export default router
