/*
console.log('hello');
console.log('world');
console.log('css');
*/
//创建函数封装代码
function say(){
  console.log('hello');
  console.log('world');
  console.log('html');
}
//say();
//say();
//say();
//练习: 创建函数，封装计算两个数字(2,3)相加的和，调用3次
function add(){
  console.log(2+3);
}
//add();
//add();
//add();
//练习: 创建函数，封装计算1~100之间所有整数的和，调用3次
function getSum(){
  for(var i=1,sum=0;i<=100;i++){
    sum+=i;
  }
  console.log(sum);
}
getSum();
getSum();
getSum();




