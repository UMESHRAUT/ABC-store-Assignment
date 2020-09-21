const express=require('express');
const apiRouter=express.Router();

var brandRouter=require('./brand')
var categoryRouter=require('./category')
var productRouter=require('./product')
var shopRouter=require('./shop');



apiRouter.use('/shop/category/',categoryRouter)
apiRouter.use('/shop/brand/',brandRouter)
apiRouter.use('/shop/product',productRouter)
apiRouter.use('/shop/',shopRouter)



module.exports=apiRouter;

