const express=require('express');
var app=express();
app.listen(8080);

//托管静态资源到public目录
app.use( express.static('./public') );