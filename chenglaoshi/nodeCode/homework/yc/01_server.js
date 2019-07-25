const express=require('express');
var user=require('./user');
const product=require('./product');
const server=express();
server.listen(80,()=>{
    console.log('server is running');
});
server.use('/user',user);
server.use('/product',product);

/**
 *    创建商品路由器product.js，添加路由，导出路由器；
 *     在服务器中引入并使用，给所有url添加 /product
 */