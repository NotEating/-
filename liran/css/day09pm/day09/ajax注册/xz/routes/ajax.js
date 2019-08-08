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
//3. restful,get登录接口  
router.get('/v1/login/:uname-:upwd',(req,res)=>{
	//获取请求中参数
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	//数据库操作
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//04  post的登录(先用get方法把流程跑通，要求restful的get方法)
router.post('/v2/login',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	console.log("uname:"+$uname);
	console.log("upwd:"+$upwd);
	//操作数据库
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//05.userlist接口，查询所有用户
router.get("/v1/userlist",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(typeof(result));
		res.send(result);
	});
});
//导出路由器对象
module.exports=router;

