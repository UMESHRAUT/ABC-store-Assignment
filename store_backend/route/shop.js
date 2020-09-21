const express=require('express')
const router=express.Router();

const database=require('../databaseHandler')

const db=database.getDataBaseServiceInstance();




// Add shop into database
router.post('/',(req,res)=>{
    console.log(req.body);
    const {shop_name}=req.body;
    console.log(shop_name);
    console.log("reaching");

    const result=db.addShop(shop_name);

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})

// get details of all shop
router.get('/',(req,res)=>{
    
    const result=db.getAllShop()

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})

// update shop details
// /api/shop?shop_id=id
router.put('/',(req,res)=>{
    const shop_id=req.query.shop_id;
    console.log(shop_id);
    console.log("reacging update");
    const {shop_name}=req.body;

    const result=db.updateShop(shop_id,shop_name)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


// delete shop by id
// shop?shop_id=id
router.delete('/',(req,res)=>{
    const shop_id=req.query.shop_id
    console.log(shop_id);
    const result=db.deleteShop(shop_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})

module.exports=router