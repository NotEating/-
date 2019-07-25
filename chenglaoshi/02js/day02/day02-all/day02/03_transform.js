//转整型
var num1=parseInt(3.14);//3
var num2=parseInt('5.8');//5
var num3=parseInt('4.9a');//4
var num4=parseInt('a4');//NaN
//true  undefined  null
var num5=parseInt(true);
var num6=parseInt(undefined);
var num7=parseInt(null);
//console.log(num5,num6,num7);

//转浮点型
var n1=parseFloat('5.8');//5.8
var n2=parseFloat('4.9a');//4.9
var n3=parseFloat('a4.9');
//console.log(n3,typeof n3);

//将数值和布尔型转字符串
var n=false;
console.log( n.toString(),typeof n.toString() );





