const express=require('express');
//引入查询字符串模块
const querystring=require('querystring');
//创建web服务器，并监听端口
var app=express();
app.listen(8080);

//请求方法:get  请求url:/login
app.get('/login', function(req,res){
  //响应文件
  //C:\xampp\htdocs\CL\NODEJS\day04
  res.sendFile(__dirname+'/login.html');
});
//根据表单提交，来创建对应的路由
//请求方法:post  请求url: /mylogin
//响应'登录成功'
app.post('/mylogin',function(req,res){
  //获取post请求传递的数据
  //监听是否有数据传递，自动触发回调函数
  req.on('data',function(chunk){
    //chunk 就是传递的数据
	//console.log(chunk.toString());
	var str=chunk.toString();
	//把查询字符串解析为对象
    var obj=querystring.parse(str);
	console.log(obj);
  })
  res.send('登录成功');
});

//练习：向服务器请求方法:get  url:/reg，响应一个注册的文件 reg.html
app.get('/reg',function(req,res){
  //响应文件
  res.sendFile(__dirname+'/reg.html');
});

//根据表单的提交，创建对应的路由
//方法：get  url：/myreg
app.get('/myreg',function(req,res){
  //获取get请求的数据: 是查询字符串
  console.log(req.query);
  res.send('注册成功');
});

