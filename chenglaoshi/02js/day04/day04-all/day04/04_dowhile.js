//打印1~10之间所有的整数
/*
var i=11;
do{
  console.log(i);
  i++;
}while(i<=10);

//练习: 循环打印30~40之间所有的整数
var i=30;
do{
  console.log(i);
  i++;
}while(i<=40);

//练习: 循环打印50~40之间所有的整数
var i=50;
do{
  console.log(i);
  i--;
}while(i>=40);

//练习: 打印1~100之间所有能被7整除的数字
var i=1;
do{
  //i代表所有的整数
  if(i%7===0){//判断是否能被7整除
    console.log(i);
  }
  i++;
}while(i<=100);
*/
//练习: 计算1~100之间所有能被3整除的数字的和
var sum=0;
var i=0;
do{
  //i代表所有整数
  //获取能被3整除的整数
  if(i%3===0){
    //把满足条件的i加到sum中
	sum+=i;
  }
  i++;
}while(i<=100);
console.log(sum);






