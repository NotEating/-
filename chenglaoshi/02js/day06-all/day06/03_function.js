//创建函数————函数声明
function fn(){

}
//创建函数————函数表达式
//变量名称fun，是函数名称
var fun=function(a,b){
  return a+b;
}
//调用匿名函数创建的函数
console.log( fun(5,8) );
//console.log(fun);
//console.log(fn);

//练习: 使用函数表达式创建函数，计算任意两个数字之间所有整数的和，返回结果。
var getSum=function(a,b){
  //计算a~b之间所有整数的和
  for(var i=a,sum=0;i<=b;i++){
    //i代表所有整数
	sum+=i;
  }
  return sum;
}
console.log( getSum(50,100) );


