const hp=require('http');
hp.get('www.tmooc.cn',function(res){
    console.log(res.statusCode);
})