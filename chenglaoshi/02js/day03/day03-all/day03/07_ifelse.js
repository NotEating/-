var sex=1;
if(sex===0){
  console.log('女');
}else{
  console.log('男');
}
//三目运算符
sex===0 ? console.log('女') : console.log('男');
//声明变量保存年龄，如果满18打印成年人，否则打印未成年人
var age=19;
if(age>=18){
  console.log('成年人');
}else{
  console.log('未成年人');
}
//声明变量保存用户名和密码，如果用户名为root，并且密码为123456，打印登录成功，否则打印登录失败
var uname='root';
var upwd='777777';
if(uname==='root' && upwd==='123456'){
  console.log('登录成功');
}else{
  console.log('登录失败');
}



