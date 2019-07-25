//引入http模块
const http=require('http');
//向服务器发请求
//使用回调函数获取响应
http.get('http://www.weather.com.cn/data/sk/101010100.html',function(res){
  //res: 响应的对象
  //console.log( res.statusCode );//状态码
  //获取响应的数据
  //监听是否有数据传递,一旦有，自动触发回调函数
  res.on('data',function(chunk){
    //chunk传递的数据
	console.log(chunk.toString());
  })
});



