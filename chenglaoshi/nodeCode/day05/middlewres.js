const express=require('express');
var server=express();
server.listen(80,()=>{
    console.log('running');
});

server.get('/shopping',(req,res,next)=>{ 
    var price=Number(req.query.price);  
    req.query.price=price+100;
    next();
});
server.use('/shopping',function(req,res){
   var st= Number(req.query.price);
    res.send(st);
});

server.use(express.static('./public'));

/**
 * （2）创建路由，方法get 	url：/shopping；
 * 传递商品的价格price，要求在中间件中将商品的价格加100.
 * 最后响应 ‘商品的价格为：***’
 */

