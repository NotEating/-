//计算任意两个数字相加的和
function add(a,b){//形参
  console.log(a+b);
}
//add(2,3);//实参
//add(4,9);
//练习: 创建函数，计算1~任意1个数字之间所有整数的和，调用多次
function getSum(n){
  //1~n
  //循环产生1~n之间所有整数的和
  for(var i=1,sum=0;i<=n;i++){
    //i代表之间所有整数
	sum+=i;
  }
  console.log(sum);
}
//getSum(50);
//getSum(100);
//getSum(150);

function fn(a,b){
  //形参未赋值，结果undefined
  console.log(a,b);
}
//fn(1);
//fn();
//fn(2,3,4);

//练习: 创建函数，计算任意两个年份之间的闰年个数，调用多次
function getCount(year1,year2){
  //计算year1~year2之间闰年个数
  //循环产生两个年份之间所有的数字
  for(var i=year1,sum=0;i<=year2;i++){
    //i代表所有的年份
	if(i%4===0 && i%100!==0 || i%400===0){
	  sum++;
	}
  }
  console.log(sum);
  return sum;
}
var num1=getCount(2000,2019);
var num2=getCount(1900,2020);
console.log(num1,num2);






