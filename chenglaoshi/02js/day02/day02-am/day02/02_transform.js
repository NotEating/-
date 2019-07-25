//隐式转换 
var a1=1+'2';//'12'
var a2=3+true;//4
var a3=3+false;//3
var a4='5'+true;//'5true'
//console.log(a4,typeof a4);

var num1=3,num2=true,num3='tedu';
//console.log(num1+num2+num3);//'4tedu'
//console.log(num2+num3+num1);//'truetedu3'
//console.log(num3+num1+num2);//'tedu3true'


var b1='2'-'3';
var b2='5'-true;
var b3=4*'5';
//'8a'->NaN  NaN和任何值执行加减乘除返回还是NaN
var b4='8a'-10; //NaN -> Not a Number
//undefined->NaN
var b5=undefined+1; //NaN
var b6=null-4;//-4
//console.log(b6,typeof b6);

var c1=Number(null);
//console.log(c1,typeof c1);

//练习：声明变量保存一个人的姓名，性别，年龄，打印“我的姓名叫?，性别?，年龄?”
var name='汤姆';
var sex='男';
var age=18;
//console.log('我的姓名叫'+name+'，性别'+sex+'，年龄'+age);
//练习：声明变量保存笔记本的名称，价格，
//打印"商品的名称为?，价格为?"
var title='Apple Air';
var price=5999;
console.log('商品的名称：'+title+'，价格：'+price);

