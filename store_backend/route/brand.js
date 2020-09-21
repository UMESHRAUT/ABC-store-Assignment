const express=require('express')
const router=express.Router();

const database=require('../databaseHandler')

const db=database.getDataBaseServiceInstance();




// Add available brand to shop
router.post('/',(req,res)=>{
    const {brand_name,shop_shop_id}=req.body;

    const result=db.addBrand(brand_name,shop_shop_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


// get all products available in shop by brand
// product?brand_id=id
router.get('/',(req,res)=>{

    const shop_id=req.query.shop_shop_id;
    console.log(shop_id);
    const result=db.getProductsByBrand(shop_id);

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


// update existing brand name
// category?brand_id=id
router.put('/',(req,res)=>{
    const {brand_name,shop_shop_id}=req.body;

    const result=db.updateProduct(brand_name,shop_shop_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


// delete brand from shop by id
// shop?shop_id=id
router.delete('/',(req,res)=>{
    const shop_id=req.query.shop_shop_id
    console.log(shop_id);
    const result=db.deleteShop(shop_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


module.exports=router