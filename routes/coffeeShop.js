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
router.put('/:coffeeShopId', checkAuth, coffeeShopCtrl.update)
router.delete('/:coffeeShopId', checkAuth, coffeeShopCtrl.deleteShop)


export { router }
