const http=require('http');
const server=http.createServer().listen(80,()=>{
    console.log('server is running');
});

http.request('http://www.baidu.com',res=>{
   res.on('data',(da)=>{
       console.log(da.toString());

   })
});