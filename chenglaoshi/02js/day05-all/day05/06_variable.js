/*
//提升var声明的变量到所在作用域最前边,赋值还是在原来的位置
//var a;
console.log(a);
var a=1;
//a=1;

function fn(){
  //var b;
  console.log(b);
  var b=2;
  //b=2;
}
fn();


//查看以下程序的打印结果
var c=3;
function fun(){
  //var c;
  console.log(c);
  var c=5;
  //c=5;
}
fun();


var e=7;
function foo(){
  console.log(e);//7
  e=9;//全局变量e赋值为9
}
foo();
//访问全局变量e
console.log(e);
*/

//函数中的参数
function fn1(a,b){
  //参数是局部变量，不能被外部访问
  //var a,b;
  return a+b;
}
fn1(2,3);
//console.log(a);

var m=7;
function fn2(m){
  //var m=5;
  //修改的值是当前作用域下的m
  m=m+3;//在原来基础之上加3
  //参数m(局部变量)值是8
}
fn2(5);
console.log(m);






