const express=require('express')
const router=express.Router();

const database=require('../databaseHandler')

const db=database.getDataBaseServiceInstance();



// Add category 
router.post('/',(req,res)=>{
    const {category_name,shop_shop_id}=req.body;
    console.log(category_name);
    const result=db.addCategory(category_name,shop_shop_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})

// get all products available in shop by category
// product?category_id=id
router.get('/',(req,res)=>{

    const shop_id=req.query.shop_shop_id;
    console.log(shop_id);
    const result=db.getAvailableCategories(shop_id);

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


// update existing category name
// category?category_id=id
router.put('/shop/update-category',(req,res)=>{
    console.log("reacging update");
    const {product_id,product_name,product_count,category_category_id,brand_brand_id}=req.body;
    const result=db.updateProduct(product_id,product_name,product_count,category_category_id,brand_brand_id)
    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})

// delete category shop by id
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