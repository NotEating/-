/**
 * 文件创建、删除、读写操作
 */

const fs=require('fs');

// fs.mkdir('./yc',error=>{
//     console.log(error);
// });

// fs.rmdir('./yc',error=>{
//     console.log(error);
// });
fs.readdir('./yc',(error,file)=>{
    if(error){
        throw 'cuow'
    }
    console.log(file);
});
fs.writeFile('./2.js','123456',err=>{
    console.log(err);
});
fs.appendFile('./2.js','姓名',err=>{
    console.log('成功');
});
fs.appendFileSync('./02.js','yc');
var data='账号：318771301 密码：231313131';

var arr=data.split(' ');
for(var i=0;i<arr.length;i++){
    fs.appendFileSync('./stu.txt',arr[i]+'\n');
}
fs.readFile('stu.txt',(err,date)=>{
    console.log(data);

});

console.log(fs.existsSync('./yc/1.js'));

const readStream=fs.createReadStream('./stu.txt');
readStream.setEncoding('utf8');
readStream.on('data',function(e){
    console.log(e);
})