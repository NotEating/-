//(function (exports, require, module, __filename, __dirname) {

console.log('08_2.js');
var b=2;
function add(){
  console.log(5);
}

//导出
//module.exports 当前模块导出的对象
module.exports.myb=b;
//把函数导出
module.exports.add=add;

//});