const express=require('express');
const ce=express();
ce.listen(8084);

console.log(__dirname);
ce.get('/fi',(req,res,next)=>{
    req.query.num>1&&next();
    res.send({
        yc:'yc',
        name:'cc',
        sex:'1'
    });
});
ce.get('/fi',(req,res,next)=>{
    res.send({
        yc:'2',
        name:'2',
        sex:'12'
    });
});

//配置所有请求方式的路由，第一个不传参数为配置所有url请求
ce.use((req,res,next)=>{
    res.send('123');
});


// ce.get('/second', (req, res, next) => {
//     if (Number(req.query.num) > 10) {
//       // 满足条件时，才可触发同名的下一个路由。
//       req.randomNum = Math.floor(Math.random() * 100)
//       next()
//     } else {
//       res.send({
//         error: 1,
//         msg: '请输入大于10的数字'
//       })
//     }
//   })
  
//   ce.get('/second', (req, res, next) => {
//     res.send({
//       error: 0,
//       msg: `输入成功，接收到的随机数为${req.randomNum}`
//     })
//   })
