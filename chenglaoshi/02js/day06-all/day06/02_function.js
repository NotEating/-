//计算1~n之间所有整数和
function getSum(n){
  //当n为1的时候，返回1
  if(n===1){
    return 1;
  }
  //由当前的数+上一个数~1之间所有整数的和
  return n+getSum(n-1);
}
//console.log( getSum(100) );//5+getSum(4)
//练习: 使用递归计算斐波那契数列的第n项
//12  20  50
function fib(n){
  //结束条件: 当n为1，或者n为2，返回1
  if(n===1 || n===2){
    return 1;
  }
  //当前这一项的值，由前两项相加的和
  return fib(n-1)+fib(n-2);
}
console.log( fib(50) );
/*
fib(4)+fib(3)
fib(3)+fib(2)+fib(2)+fib(1)
fib(2)+fib(1)+fib(2)+fib(2)+fib(1)
*/



