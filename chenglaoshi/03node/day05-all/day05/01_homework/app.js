const express=require('express');
//引入商品路由器 
const productRouter=require('./product.js');
var app=express();
app.listen(8080);

//在服务器使用路由器，给所有的url添加前缀 /product   /product/list
app.use('/product',productRouter);