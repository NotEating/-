/*
console.log(a);
var a=1;
//let 变量声明
//不存在提升
let b=2;
console.log(b);

//1.块级作用域
{
  let num=1;
}
//console.log(num);
//练习: 计算1~100之间所有整数的和，使用let声明变量，计算总和
let sum=0;
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);
*/

//2.箭头函数
var arr=[23,9,78,6,45];
//排序
//console.log( arr.sort(function(a,b){
//  return a-b;
//}) );

//console.log( arr.sort((a,b)=>{
//  return a-b;
//}) );

console.log( arr.sort((a,b)=>a-b) );







