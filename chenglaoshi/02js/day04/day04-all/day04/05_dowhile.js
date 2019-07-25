//声明变量保存密码
var pwd='123456';
//无限循环弹出提示框
/*
do{
  //获取输入的内容
  var str=prompt('input password');
  //如果输入密码正确
  if(str===pwd){
    //结束循环
	break;
  }
}while(true);
*/
//利用循环条件来判断输入的是否正确
do{
  //获取输入的值
  var str=prompt('input password');
}while(str!==pwd);//如果输入的密码不正确，继续执行循环体






