const express=require('express');
//引入路由器模块(自定义模块)
const userRouter=require('./user.js');
//创建web服务器，监听端口
var app=express();
app.listen(8080);

//挂载到路由器：把路由器交给服务器使用
//同时要给所有的url添加/user -> /user/list
app.use('/user',userRouter);





