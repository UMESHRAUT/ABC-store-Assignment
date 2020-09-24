const mysql=require('mysql');
const dotenv=require('dotenv');
dotenv.config();
let instance=null;

var mySqlConnection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER_NAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    post:process.env.DB_PORT
})

mySqlConnection.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('db '+mySqlConnection.state);
    }
})

class DataBaseService{
    static getDataBaseServiceInstance(){
        return instance?instance:new DataBaseService() 
    }

// ******SHOP******//

    // get All shops
    async getAllShop(){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                 const query="SELECT * FROM shop";

                 mySqlConnection.query(query,(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }

    // add  shop
    async addShop(shop_name){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                 const query="INSERT INTO shop (shop_name) VALUES (?);";

                 mySqlConnection.query(query,[shop_name],(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }

// update shop by id
    async updateShop(shop_id,shop_name){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                 const query="UPDATE shop SET `shop_name`='"+shop_name+"' WHERE `shop_id`='"+shop_id+"'";

                 mySqlConnection.query(query,(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }

// Delete shop by id
    async deleteShop(shop_id){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                 const query=`DELETE FROM shop  WHERE shop_id=${shop_id}`

                 mySqlConnection.query(query,(err,result)=>{    
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }


// *****CATEGORY******//

    // Add category to perticular shop
    async addCategory(category_name,shop_shop_id){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                 const query="INSERT INTO category(category_name,shop_shop_id) VALUES (?,?);";

                 mySqlConnection.query(query,[category_name,shop_shop_id],(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }

        // get all available categories
        async getAvailableCategories(shop_id){
            try {
                const insertId=await new Promise((resolve,reject)=>{
                    let query;
                    if(shop_id!=undefined){
                        console.log("geting from if");
                     query=`SELECT * FROM category where shop_shop_id=${shop_id}`;
                    }else{
                        console.log("geting from else");
                     query="SELECT * FROM category";
                    }
                     mySqlConnection.query(query,(err,result)=>{
                         if(err){
                             reject(new Error(err.message))
                         }
                         resolve(result)
                     })
                })
                console.log(insertId);
                return insertId;
            } catch (error) {
                console.log(error);
            }
        }

    
        // add  shop
        async addShop(shop_name){
            try {
                const insertId=await new Promise((resolve,reject)=>{
                     const query="INSERT INTO shop (shop_name) VALUES (?);";
    
                     mySqlConnection.query(query,[shop_name],(err,result)=>{
                         if(err){
                             reject(new Error(err.message))
                         }
                         resolve(result)
                     })
                })
                console.log(insertId);
                return insertId;
            } catch (error) {
                console.log(error);
            }
        }
    
    // update shop by id
        async updateShop(shop_id,shop_name){
            try {
                const insertId=await new Promise((resolve,reject)=>{
                     const query="UPDATE shop SET `shop_name`='"+shop_name+"' WHERE `shop_id`='"+shop_id+"'";
    
                     mySqlConnection.query(query,(err,result)=>{
                         if(err){
                             reject(new Error(err.message))
                         }
                         resolve(result)
                     })
                })
                console.log(insertId);
                return insertId;
            } catch (error) {
                console.log(error);
            }
        }
    
    // Delete shop by id
        async deleteShop(shop_id){
            try {
                const insertId=await new Promise((resolve,reject)=>{
                     const query=`DELETE FROM shop WHERE shop_id=${shop_id}`
    
                     mySqlConnection.query(query,(err,result)=>{    
                         if(err){
                             reject(new Error(err.message))
                         }
                         resolve(result)
                     })
                })
                console.log(insertId);
                return insertId;
            } catch (error) {
                console.log(error);
            }
        }
    


// *****BRAND********//

    async addBrand(brand_name,shop_shop_id){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                 const query="INSERT INTO brand (brand_name,shop_shop_id) VALUES (?,?);";

                 mySqlConnection.query(query,[brand_name,shop_shop_id],(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductsByBrand(shop_id){
        try {
            const insertId=await new Promise((resolve,reject)=>{
                let query;
                if(shop_id!=undefined){
                    console.log("geting from if");
                 query=`SELECT * FROM brand where shop_shop_id=${shop_id}`;
                }else{
                    console.log("geting from else");
                 query="SELECT * FROM brand";
                }
                 mySqlConnection.query(query,(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }



// *****PRODUCT*******//
    async addProduct(product_name,product_count,category_category_id,brand_brand_id,shop_shop_id){
        try {
            const dateAdded=new Date();
            const insertId=await new Promise((resolve,reject)=>{
                 const query="INSERT INTO product(product_name,product_count,product_added,product_modified,category_category_id,brand_brand_id,shop_shop_id) VALUES (?,?,?,?,?,?,?);";

                 mySqlConnection.query(query,[product_name,product_count,dateAdded,dateAdded,category_category_id,brand_brand_id,shop_shop_id],(err,result)=>{
                     if(err){
                         reject(new Error(err.message))
                     }
                     resolve(result)
                 })
            })
            console.log(insertId);
            return insertId;
        } catch (error) {
            console.log(error);
        }
    }



    async getAllProducts(shop_id){
        try {
            const products=await new Promise((resolve,reject)=>{
                let query;
                if(shop_id!=undefined){
                    console.log("geting from if");
                 query=`SELECT * FROM storeDatabase.product INNER JOIN brand ON brand.brand_id=product.brand_brand_id INNER JOIN category ON category.category_id=product.category_category_id INNER JOIN shop ON shop.shop_id=product.shop_shop_id where product.shop_shop_id=${shop_id}`;
                }else{
                    console.log("geting from else");
                 query="SELECT * FROM product";
                }
                mySqlConnection.query(query,(err,results)=>{
                    if(err){
                        reject(new Error(err.message));
                    }
                    resolve(results);
                })
            })
            console.log(products);
            return products
        } catch (error) {
            console.log(error);
        }
    }


    async getProduct(product_id){
            const products=await new Promise((resolve,reject)=>{
                const query=`SELECT * FROM product where product_id=${product_id}`;
                mySqlConnection.query(query,(err,results)=>{
                    if(err || results.data==undefined){
                        reject(new Error("no data availabe"));
                    }
                    resolve(results);
                })
            })
            return products
    }


    async updateProduct(product_id,product_name,product_count,category_category_id,brand_brand_id){
        try {
            const dateUpdate=new Date();
            const products=await new Promise((resolve,reject)=>{
                const query="UPDATE product SET `product_name`='"+product_name+"',`product_count`='"+product_count+"',`category_category_id`='"+category_category_id+"',`brand_brand_id`='"+brand_brand_id+"' where `product_id`='"+product_id+"'";

                mySqlConnection.query(query,(err,results)=>{
                    if(err){
                        reject(new Error(err.message));
                    }
                    resolve(results);
                })
            })
            console.log(products);
            return products
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports= DataBaseService;