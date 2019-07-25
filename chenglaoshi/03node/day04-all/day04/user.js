const express=require('express');
//创建路由器对象
var router=express.Router();
//往路由器中添加路由
//用户列表
//请求方法:get  url:/list
router.get('/list',function(req,res){
  res.send('这是用户列表');
});

//导出路由器对象
module.exports=router;
