//文件系统模块 fs -> file system
//引入fs模块
const fs=require('fs');
//文件包含文件形式和目录形式 
//1.查看文件的状态(文件大小、创建时间、目录/文件形式)
//异步方法：在事件队列中执行，通过回调函数来获取结果
/*
fs.stat('./02_2',function(err,stats){
  //err: 可能产生的错误信息
  if(err) throw err;

  //stats: 文件的状态
  //console.log(stats);
  //是否为目录
  console.log( stats.isDirectory() );
  //是否为文件
  console.log( stats.isFile() );
});

//同步方法：在主程序中执行，通过返回值获取结果
var s=fs.statSync('./02_2');
console.log(s);
*/
//2.创建目录
fs.mkdir('./mydir',function(err){
  if(err) throw err;
});



console.log(2);











