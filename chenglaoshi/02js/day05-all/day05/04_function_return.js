function add(a,b){
  //只是表示把a+b的结果打印到控制台，并不代表把结果返回
  //console.log(a+b);
  //把计算后的结果返回(吐出来)
  return a+b;
  //后续代码不会执行
  console.log('函数执行结束');
}
var num1=add(87,92);
var num2=add(75,81);
//console.log(num1,num2);
//练习: 创建函数，传递两个参数，返回任意两个数字的最大值。
function getMax(a,b){
  //if(a>b){
  //  return a;
  //}else{
  //  return b;
  //}
  return a>b ? a : b;
}
var res=getMax(3,6);
//console.log(res);

//练习: 创建函数，传递三个参数，返回任意三个数字的最大值。
function getMax2(a,b,c){
  /*
  var max;//前两个数字的最大值
  if(a>b){
    max=a;
  }else{
    max=b;
  }
  //用max和c比较，返回最大值
  if(max>c){
    return max;
  }else{
    return c;
  }
  */
  //a和b比较产生最大值
  var max=a>b ? a : b;
  //max和c比较，返回最大值
  return max>c ? max : c;
}
var res=getMax2(2,17,9);
//console.log(res);
//练习: 创建函数，传递1个参数，根据订单的状态码返回对应的中文状态
function getStatus(n){
  switch(n){
    case 1:
	  return '等待付款';
	  //break;
	case 2:
	  return '等待发货';
	case 3:
	  return '运输中';
	case 4:
	  return '已签收';
	case 5:
	  return '已取消';
	default:
	  return '无法追踪';
  }
}
//console.log( getStatus(3) );
//练习: 创建函数，传递1个参数，查看任意一个年份是否为闰年，如果是闰年返回true，否则返回false
function isRun(year){
  if(year%4===0 && year%100!==0 || year%400===0){
    return true;
  }
  return false;
}
//console.log( isRun(2019) );
//如果是闰年，打印366，否则365
if( isRun(2020) ){//是闰年
  console.log(366);
}else{ //不是闰年
  console.log(365);
}

//计算1~任意数字之间所有整数阶乘的和
//1! + 2! + 3! + 4! + 5!...
//阶乘 5! = 5*4*3*2*1  120
//     4! = 4*3*2*1    24
//     3! = 3*2*1      6
//     2! = 2*1        2
//     1! = 1          1
//练习1: 创建函数，计算1~任意数字之间所有整数的乘积，并返回结果(计算任意数字的阶乘)
function getJC(n){
  //1~n之间所有整数的乘积
  for(var i=1,jc=1;i<=n;i++){
    //i代表所有的整数
	jc*=i;
  }
  //把结果返回
  return jc;
}
console.log( getJC(5) );
//练习2: 创建函数，计算1~任意数字之间所有整数的和，并返回结果
function getSum(n){
  //计算1~n之间所有整数的和
  for(var i=1,sum=0;i<=n;i++){
    //sum=1+2+3+4+5
    sum+=i;
	//sum=1!+2!+3!+4!+5!
	//把i传递给getJC，获取任意整数的阶乘
	//sum+=getJC(i);
  }
  return sum;
}
console.log( getSum(5) );







