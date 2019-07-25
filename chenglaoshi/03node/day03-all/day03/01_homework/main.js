//引入不带路径的目录模块
const home=require('home');
console.log(home);
//调用home下get方法
//home.get('./main.js');

console.log( home.get2('./node_modules/home') );
