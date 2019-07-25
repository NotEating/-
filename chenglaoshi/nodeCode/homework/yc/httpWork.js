const http=require('http');
const fs=require('fs');
const zlib=require('zlib');
const server=http.createServer();
server.listen(8884,()=>{
    console.log('running');
});
server.on('request',(req,res)=>{
    var str=req.url;
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(str==='/'){
     res.writeHead(200,{'Content-Encoding':'gzip'});
     var gzip=zlib.createGzip();
    fs.createReadStream('./deme.html').pipe(gzip).pipe(res);    
    }
    else
    {
        res.end();
    }
   // console.log(req.socket.remotePort);
});