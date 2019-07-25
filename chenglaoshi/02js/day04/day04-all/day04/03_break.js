//循环产生1~10之间所有整数
/*
var i=1;
while(true){
  console.log(i);
  //当打印10，结束
  //当i为10，结束循环
  if(i===10){
    break;
  }
  i++;
}

//练习：使用无限循环计算1~100之间所有整数的和
var sum=0; 
var i=1;
while(true){
  //把所有的i加到sum中
  sum+=i;
  //如果i为100结束循环
  if(i===100){
    break;
  }
  i++;
}
console.log(sum);
*/

//1.声明变量保存一个数字
var num=18;
//2.无限循环弹出提示框
while(true){
  //获取输入的值
  var str=prompt('input a number');
  console.log(str);
  //如果输入的值大于保存的数字
  if(str>num){
    alert('big');
  }else if(str<num){
    //如果输入的值小于保存的数字
	alert('small');
  }else{
	//判断是否输入的时数字
	//如果不是数字  isNaN
    if( isNaN(str) ){
	  alert('input a number')
	}else{
	  //是数字，才能说明输入正确  
	  alert('right');
	  //结束循环
	  break;
	}
	
  }
}
/*
  //Number('')  -> 0
  ''<18 -> true
  //字符串转数字
  null<18 ->true
  '1a'>18
  NaN>18 -> false
  '1a'<18
  NaN<18 -> false

*/



