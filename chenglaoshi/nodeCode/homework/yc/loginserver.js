/**
 * （7）使用express创建web服务器，创建登录路由
 * （获取登录的html），请求的方法get,
 * 请求的url：/login，响应文件login.html
 */

 const express=require('express');
 const server=express();
 const qs=require('querystring');

 server.listen(80,()=>{
     console.log('server is running');
 });

 server.get('/html',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
 });
//  server.get('/html/:id/:pwd',(req,res)=>{
//     if(req.params.id==='1'&&req.params.pwd==='1'){
//         res.send('ok')
//     }
//  });

server.get('/reg',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});
server.get('/myreg',(req,res)=>{
    var qyerystr=req.query;
    console.log(qyerystr);
    res.send('提交成功');

});
server.post('/tj',(req,res)=>{
    req.on('data',(data)=>{
        var ob=qs.parse(data.toString());
        if(ob.id==='1'&&ob.pwd==='1')
        {
            res.send('登录成功');
        }
        else{        
            res.redirect('/html');
        }   
    });

});
