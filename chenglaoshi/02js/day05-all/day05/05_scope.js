//全局作用域
//全局变量，在任何位置访问到
/*
var b=2;
function fn(){
  //函数作用域
  //局部变量，在当前函数内部使用
  var a=1;
  //访问变量b
  console.log(b);
}
fn();
//访问函数内的变量
console.log(a);


var c=3;
function fun(){
  //给全局变量c重新赋值
  c=4;
}
fun();
console.log(c);
*/

function foo(){
  //var d=5;
  d=5;//函数内没有使用var关键字声明的变量，自动是全局变量
  //e是局部变量，f是全局变量
  var e=f=6;
  /*
  f=6;
  var e=f;
  */
}
//调用函数，执行函数体，声明变量
foo();
//访问函数作用域中的变量
console.log(f);


