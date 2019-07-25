//练习: 声明变量保存4个英文字母(大小写)，无限循环弹出提示框，输入验证码（不区分大小写），如果输入正确结束循环
var code='eyHZ';
//无限循环
while(true){
  //弹出提示框
  var str=prompt();
  //比较是否输入正确(不区分大小写)
  if(str.toUpperCase()===code.toUpperCase()){
    break;//结束循环
  }
}





