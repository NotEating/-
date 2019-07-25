//exports,require,module,__filename,__dirname


//创建函数
function getLength(r){
  return 2*Math.PI*r;
}
function getArea(r){
  return Math.PI*Math.pow(r,2);
}
//导出函数
//module.exports指代导出对象
/*
module.exports.getLength=getLength;
module.exports.getArea=getArea;
module.exports.say=function(a,b){
  console.log(a+b);
}
//使用exports导出
exports.num=5;
*/
//导出一个对象
//exports 不再指向 module.exports
module.exports={
  lid:5,
  title:'戴尔'
}

console.log(module.exports === exports);















