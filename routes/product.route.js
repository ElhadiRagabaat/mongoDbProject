const  express = require("express")
const router = express.Router()

const product_controller = require('../controllers/product.controller')

router.get('/test', product_controller.test)

router.get('/' , product_controller.product_test)

router.post('/' , product_controller.post_product)


router.get('/:id',product_controller.product_details)

router.put('/:idUpdate',product_controller.product_update)

router.delete('/:idDl',product_controller.product_delete)



module.exports=router


