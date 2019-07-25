//for-in
//关联数组
var person=[];
person['eid']=1;
person['name']='scott';
person['age']=18;

//console.log(person);

for(var key in person){
  //console.log(key,person[key]);//下标
}
//练习:创建索引数组，包含若干个城市名称，使用for-in遍历数组，打印每个元素
var city=['三亚','漠河','重庆','南京'];
for(var key in city){
  //console.log(key,city[key]);
}

//练习:创建数组，包含有若干个成绩，遍历数组获取每个成绩，计算总分
//使用for循环遍历
var score=[91,88,79,80,83,81,79];
//遍历数组
for(var i=0,sum=0;i<score.length;i++){
  //i就是作为下标
  //console.log(i,score[i]);
  sum+=score[i];
}
//console.log(sum);
//练习: 创建数组，包含多个姓名，把姓名为'king'的全部替换成'金'
var name=['tom','king','scott','king','david'];
//遍历数组，获取每个姓名
/*
for(var i=0;i<name.length;i++){
  //name[i] 每个元素，姓名
  if(name[i]==='king'){
    //给该元素赋值为 '金'
	name[i]='金';
  }
}
console.log(name);

//练习: 创建数组，包含多个姓名，统计king出现的次数
var name=['tom','king','scott','king','david'];
for(var i=0,count=0;i<name.length;i++){
  //判断每个元素是否为king
  if(name[i]==='king'){
    count++; //满足条件，count次数加1
  }
}
console.log(count);

//练习: 创建数组，包含多个数字，查找最大值
var arr=[10,5,18,30,19];
//声明变量，保存最大值，默认把第一个元素作为最大值
var max=arr[0];
//使用max和第二个元素以后的所有元素进行比较
for(var i=1;i<arr.length;i++){
  //arr[i] 1~最后
  if(max<arr[i]){
    //如果max小于任何一个元素，则把该元素放入到max中
    max=arr[i];
  }
}
console.log(max);
*/
//练习: 创建函数，传递一个参数(数组)，返回这组数字的平均值
function getAvg(arr){
  //arr=[10,5,18,30,19]
  //遍历数组，获取总和
  for(var i=0,sum=0;i<arr.length;i++){
     sum+=arr[i];
  }
  return sum/arr.length;
}
console.log( getAvg([10,5,18,30,19]) );










