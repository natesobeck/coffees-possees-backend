import { Router } from "express"
import * as coffeeShopCtrl from "../controllers/coffeeShop.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"


const router = Router()

/*---------- Public Routes ----------*/
router.get('/', coffeeShopCtrl.index)
router.get('/:coffeeShopId', coffeeShopCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, coffeeShopCtrl.create)
router.post('/:coffeeShopId/reviews',checkAuth, coffeeShopCtrl.createReview)

router.post('/:coffeeShopId/:clubId', checkAuth, coffeeShopCtrl.addClubToShop)

router.put('/:coffeeShopId', checkAuth, coffeeShopCtrl.update)
router.put('/:coffeeShopId/reviews/:reviewId', checkAuth, coffeeShopCtrl.updateReview)

router.delete('/:coffeeShopId', checkAuth, coffeeShopCtrl.deleteShop)
router.delete('/:coffeeShopId/reviews/:reviewId', checkAuth, coffeeShopCtrl.deleteReview)


export { router }
