//(function (exports, require, module, __filename, __dirname) {
var a=1;
//引入08_2.js，得到的08_2.js模块中导出的内容
var obj=require('./08_2.js');
console.log(obj);
console.log(obj.myb);
obj.add();


//})
