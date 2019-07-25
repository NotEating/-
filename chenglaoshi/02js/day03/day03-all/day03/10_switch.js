//根据订单的状态码打印对应的汉字
var status=1;
switch(status){
  case 1:
   console.log('等待付款');
   break;//结束switch语句，不会执行其它case
  case 2:
   console.log('等待发货');
   break;
  case 3:
   console.log('运输中');
   break;
  default:
   console.log('无法追踪');
}
//0~6  星期日~星期六
//声明变量保存星期的状态码，根据状态码打印对应的汉字，如果以上都没有——错误的星期代码
var day=1;
switch(day){
  case 0:
    console.log('星期日');
    break;
  case 1:
	console.log('星期一');
    break;
  case 2:
	console.log('星期二');
    break;
  default:
	console.log('错误的星期代码');
}





