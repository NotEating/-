/*
function fn(a){
  //a=function(){ console.log(2); }
  //a是传递的匿名函数的函数名称
  console.log( a() );
}
fn(function(){
  //console.log(2);
  return 2;
});
*/
//练习: 创建函数，传递两个参数，都是匿名函数的形式，在匿名函数中返回一个数字。计算两个数字相加的和
function add(a,b){
  console.log( a()+b() );
}
add(function(){
  //连接数据库
  //执行SQL语句
  return 4999;
},function(){
  //连接数据库
  //执行SQL语句
  return 5499;
});




