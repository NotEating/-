console.log(3);
//1.语法错误
//var a=1；
//2.引用错误
//console.log(b);
//3.类型错误
//var c=5;
//c();
//var str='hello';
//str.slic(2)
//4.范围错误
//var arr=new Array(-3);
//5.自定义错误
/*
var num='abc';
//如果num不是数字，抛出自定义的错误
if( isNaN(num) ){
  //如果是NaN
  //console.log('请输入一个数字');
  //自定义错误
  throw '请输入一个数字';
}
*/
//处理错误
//提供一个数字，必须在5~10之间
var num=8;
//if(num>10){
//  num=10;
//}
try{//尝试
  if(num>10) {
    throw '超出范围';
  }
}catch(err){ //捕获错误
  //err 收集错误信息
  console.log(err);
  num=10;
}
console.log(num);

console.log(2);






