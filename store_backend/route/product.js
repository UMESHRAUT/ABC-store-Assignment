const express=require('express')
const router=express.Router();
const redis=require('redis')


const client=redis.createClient(6379);
// middleware for cache
function cache(req,res,next){
    console.log("from cache");
    const product_id=req.params.id;
    console.log(product_id);
    client.get(product_id,(err,data)=>{
        if(err) throw err;

        if(data!=null){
            res.send(data)
        }else{
            next();
        }
    })
}

const database=require('../databaseHandler')

const db=database.getDataBaseServiceInstance();



// Add products with their category and brand name
router.post('/',(req,res)=>{

    const {product_name,product_count,category_category_id,brand_brand_id,shop_shop_id}=req.body;

    const result=db.addProduct(product_name,product_count,category_category_id,brand_brand_id,shop_shop_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})


// get all products available in shop
router.get('/',(req,res)=>{
    const {shop_shop_id}=req.query;
    console.log(shop_shop_id);
    console.log("reaching at all profuct");
    const result=db.getAllProducts(shop_shop_id);

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})

// get prodyct by id
router.get('/:id',cache,async(req,res)=>{
    try {
        const product_id=req.params.id
        const result=await db.getProduct(product_id);
        console.log(result[0]);
        console.log("from hear");
        client.set(product_id,3600,result[0])
        res.send(result)

    } catch (error) {
        console.log(error);
        res.status(404).json({error})
    }

})

// 



// update product by id
router.put('/',(req,res)=>{
    console.log("reacging update");
    const {product_id,product_name,product_count,category_category_id,brand_brand_id}=req.body;

    const result=db.updateProduct(product_id,product_name,product_count,category_category_id,brand_brand_id)

    result
        .then(data=>res.json({data:data}))
        .catch(err=>console.log(err));
})



module.exports=router