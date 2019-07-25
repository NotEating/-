//引入第三方模块express
const express=require('express');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);

//路由：接收请求，作出响应
//接收注册请求:请求的URL,请求的方法
//url: /reg   方法: get
app.get('/reg',function(req,res){
  //如果请求的方法是get，并且请求的url是/reg，自动的调用回调函数
  //req 请求的对象

  //res 响应的对象
  //设置响应内容并发送
  //res.send('注册成功');
  //响应文件
  //C:\xampp\htdocs\CL\NODEJS\day04
  //res.sendFile(__dirname+'/demo.html');
  //响应跳转
  res.redirect('http://www.tmooc.cn');
});
//获取当前文件的绝对目录
//console.log(__dirname);
//练习: 
//请求方法: get 请求url: /list,   响应内容'这是商品列表'
app.get('/list',function(req,res){
  res.send('这是商品列表');
});
//请求方法: get 请求url: /login   响应文件 login.html
app.get('/login',function(req,res){
  res.sendFile(__dirname+'/login.html');
});
//请求方法: get 请求url: /index   跳转到 http://www.codeboy.com
app.get('/index',function(req,res){
  res.redirect('http://www.codeboy.com');
});
//请求方法：get  请求url: /detail  响应'这是详情'
app.get('/detail',function(req,res){
  //获取查询字符串传递的数据
  //req对象
  console.log(req.query,req.method,req.url);
  res.send('这是详情'+req.query.lid);
});
//练习:请求的方法 get,请求的url: /order/did
//响应内容 '这是订单的详情'
app.get('/order/:did', function(req,res){
  //使用req对象，获取路由传参的数据
  console.log( req.params );
  res.send('这是订单详情');
});
//练习: 创建购物车路由，请求的方法:get，请求的url: /shopping，使用路由传参传递商品的价格和规格，然后把价格和规格显示到浏览器中
app.get('/shopping/:price/:spec',function(req,res){
  console.log( req.params );
  res.send(`
	价格:${req.params.price} <br>
	规格:${req.params.spec}
  `);
});








