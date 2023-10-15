import { Router } from 'express'
import * as clubCtrl from '../controllers/club.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', clubCtrl.index)
router.get('/:clubId', clubCtrl.show)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, clubCtrl.create)
router.put('/:clubId', checkAuth, clubCtrl.update)
router.delete('/:clubId', checkAuth, clubCtrl.deleteClub)

export { router }
