import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as clubCtrl from '../controllers/club.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', clubCtrl.index)
router.get('/:clubId', clubCtrl.show)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, clubCtrl.create)
router.put('/:clubId', checkAuth, clubCtrl.update)
router.delete('/:clubId', checkAuth, clubCtrl.deleteClub)

export { router }
