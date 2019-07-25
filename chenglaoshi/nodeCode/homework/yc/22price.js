/**
 * （1）请求方法：get 请求url：/list,响应内容’
这是商品列表‘
（2）请求方法：get请求url：/login响应文件login.html
（3）请求方法：get请求url：/index 跳转到学子商城
 */

const express=require('express');
const server=express();
server.listen(80,()=>{
    console.log('server is running');
});
server.get('/list',(req,res)=>{

    res.send('产品列表');
});
server.get('/login',(req,res,next)=>{
    res.sendFile(__dirname+'/deme.html');
});
server.get('/index',(req,res)=>{
   res.redirect('http://www.codeboy.com');
});
server.get('/order/:did',(req,res)=>{
    res.send('this is order')
});
server.get('/shopping/:price/:or',(req,res)=>{
    res.send(`价格${req.params.price}<br>规格${req.params.or}`);
});
