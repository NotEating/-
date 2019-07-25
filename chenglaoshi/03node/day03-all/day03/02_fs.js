const fs=require('fs');
//1.创建目录
//fs.mkdirSync('mydir');
//2.移除目录
/*
fs.rmdir('./mydir',function(err){
  if(err) throw err;
  console.log('目录移除成功');
});

//3.读取目录
fs.readdir('./01_homework',function(err,result){
  if(err) throw err;
  //result就是读取的结果
  console.log(result);
});

//使用同步 readdirSync
console.log(fs.readdirSync('./01_homework'));

//4.创建文件
//往文件num.txt写入数据1
fs.writeFile('./num.txt',5,function(err){
  if(err) throw err;
  console.log('写入成功');
});

//使用同步方法往文件data.txt中写入数据tom
fs.writeFileSync('./data.txt','tom');

//5.追加写入
fs.appendFile('./data2.txt','king\n',function(err){
  if(err) throw err;
  console.log('写入成功');
})

//使用同步方法，往文件stu.txt中写入一组学员的姓名。
//创建数组，添加元素
var arr=['tom','king','jerry'];
//遍历数组，获取每个元素(数据)写入
for(var i=0;i<arr.length;i++){
  //arr[i]
  //同步追加写入
  fs.appendFileSync('./stu.txt',arr[i]+'\n');
}

//6.读取文件
fs.readFile('./stu.txt',function(err,data){
  if(err) throw err;
  //data就是读取的数据
  console.log(String(data));
});

console.log( fs.readFileSync('./stu.txt').toString() );

//7.删除文件
fs.unlink('./num.txt',function(err){
  if(err) throw err;
  console.log('删除成功');
});
//同步 删除data.txt

fs.unlinkSync('./data.txt');
*/
//8.检测文件是否存在
//console.log( fs.existsSync('./data2.txt') );

//练习：如果文件data2.txt存在，同步删除它
if( fs.existsSync('./data2.txt') ){
  fs.unlinkSync('./data2.txt');
}





