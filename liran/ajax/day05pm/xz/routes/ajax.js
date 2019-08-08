const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.ajax_demo
router.get('/ajaxdemo',function(req,res){
	console.log("请求已经接收");
	res.send("这是我的第一个ajax程序");
});
//2.http的get登录接口 /login
//127.0.0.1:8080/ajax/login?uname=dingding&upwd=123456
router.get('/login',function(req,res){
	//获取用户名
	var $uname=req.query.uname;
	//获取密码
	var $upwd=req.query.upwd;
	//查询数据库
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],function(err,result){
		if(result.length>0){
			res.send("1");//1代表登录成功
		}else{
			res.send("0");//0代表登录失败
		}
	});
});
//导出路由器对象
module.exports=router;

