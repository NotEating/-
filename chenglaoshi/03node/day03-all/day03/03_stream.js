const fs=require('fs');

//1.创建可读取的流
/*
var readStream=fs.createReadStream('webstorm2017.rar');
//设置编码为utf8
readStream.setEncoding('utf8');
//监听是否有数据流
//一旦数据进入，自动触发回调函数，来获取数据
readStream.on('data',function(chunk){
  //chunk 获取的数据，分段的
  console.log(1);
});
//监听是否读取结束
//一旦读取结束，自动触发回调函数
readStream.on('end',function(){
  console.log('读取结束');
});
*/

//2.创建可写入的流
//把读取的流放入到写入的流，完成文件拷贝
//创建可读取流
var readStream=fs.createReadStream('webstorm2017.rar');
//创建可写入的流
var writeStream=fs.createWriteStream('2.rar');
//把读取流放入到写入流
readStream.pipe(writeStream);






