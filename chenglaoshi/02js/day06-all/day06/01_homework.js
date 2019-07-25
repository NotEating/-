//使用函数计算斐波那契数列的第n项
function fib(n){
  //第一项和第二项值是1
  var n1=1;
  var n2=1;
  //从第三项开始，每一项的值是前两项相加的和
  //循环从3开始
  for(var i=3;i<=n;i++){
	  //3 , 4 , 5 , 6
    //每次挪动，n1的值是上一次n2的值
	//n2的值，上一次n1+n2的值
	//用到第三方变量
    var c=n1;
    n1=n2;
	n2=c+n2;
  }
  //返回n2，代表当前项的值
  return n2;
}
console.log( fib(50) );


var a=1;
var b=2;
//准备第三个变量
var c=a;
a=b;
b=c;
console.log(a,b);









