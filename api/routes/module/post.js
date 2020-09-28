import { Router } from 'express'
const router = Router()

import { setDataHandler } from '../../controllers/setData'

router.post('/setData', setDataHandler)

export default router
