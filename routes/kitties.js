import { Router } from 'express'
import * as kittiesCtrl from '../controllers/kitties.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, kittiesCtrl.create)

export { router }