const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登录接口
router.get('/api/v1/login/:uname&:upwd',(req,res)=>{
	//1.获取参数
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	//2.操作数据库
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2.查询所有用户
router.get("/api/v1/userlist",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//3.根据uid删除用户
router.delete("/api/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//4.根据uid查询user对象
router.get("/api/v1/searchuser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="select * from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send(result);
	});
});
//5.修改接口
router.put("/api/v1/updateuser",(req,res)=>{
//	接收参数
  var $uid=req.body.uid;
  var $uname=req.body.uname;
  var $email=req.body.email;
  var $phone=req.body.phone;
  var $user_name=req.body.user_name;
  var $gender=req.body.gender;
  if(!$uid){
	res.send("uid不存在");return;
  }
  if(!$uname){
	res.send("uname不存在");return;
  }
  if(!$email){
	res.send("email不存在");return;
  }
  if(!$phone){
	res.send("phone不存在");return;
  }
  if(!$user_name){
	res.send("user_name不存在");return;
  }
  if(!$gender){
	res.send("gender不存在");return;
  }
  var sql="update xz_user set uname=?,email=?,phone=?,user_name=?,gender=? where uid=?";
  pool.query(sql,[$uname,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
	if(err) throw err;
	res.send("1");1
  });	

});
//根据用户名称查询是否可以注册get
router.get("/api/v1/checkuname/:uname",(req,res)=>{
	var $uname=req.params.uname;
	var sql="select * from xz_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//注册接口
router.post("/api/v1/register",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uname){res.send("uname为接收");return;}
	if(!$upwd){res.send("$upwd为接收");return;}
	if(!$email){res.send("$email为接收");return;}
	if(!$phone){res.send("$phone为接收");return;}
	if(!$user_name){res.send("$user_name为接收");return;}
	if(!$gender){res.send("$gender为接收");return;}
	var sql="insert into xz_user values(null,?,?,?,?,null,?,?)";
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//导出路由器对象
module.exports=router;

