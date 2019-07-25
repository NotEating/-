/**
 * （2）创建web服务器，监听端口为8080，接收浏览器的请求，根据请求作出响应
/list	响应内容	’this is product list‘
/index 		'this is homepage'
/			/index
/study		http://www.tmooc.cn
其他		响应404  not found

 * 
 */
 const http=require('http');
 var server=http.createServer();
 server.listen(8080,function(){
     console.log('服务器启动成功');
 });
 server.on('request',function(req,res){
     var strUrl=req.url;
     switch(strUrl){
        case '/list':
             res.end('this is product list');
             break;
        case '/index':
            res.end('this is homepage');
            break;
        case '/':
            res.writeHead(302,{location:'index'});
            res.end();
            break;
        case '/study':
            res.writeHead(302,{location:'https://www.tmooc.cn'});
            res.end();
            break;
         default:
        res.end('404  not found');
     }
 });