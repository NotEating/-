//创建函数，传递两个参数(数组，值)，如果值存在于数组中，返回满足条件的第一个的下标，找不到返回-1
function getIndex(arr,value){
  //遍历数组arr
  for(var i=0;i<arr.length;i++){
    //判断每个元素arr[i]是否为value
	if(arr[i]===value){
	  //如果满足，返回下标i
	  return i;
	}
  }
  //如果经过遍历没有找到，返回-1
  return -1;
}
//console.log( getIndex(['a','b','c','d','c'],'c') );

//练习:创建数组，使用遍历数组翻转数组中元素
var arr=['a','b','c','d'];
//创建一个新数组
var arr2=[];
//遍历数组，找对应的下标0~3  1~2 ...
for(var i=0;i<arr.length;i++){
  // 0  3  4
  // 1  2  4
  // 2  1  4
  // 3  0  4
  //长度-下标-1
  //console.log( arr[arr.length-i-1] );
  arr2[i]=arr[arr.length-i-1];
}
//console.log(arr2);


/*
var a=1;
var b=2;
var c=a;
a=b;
b=c;
console.log(a,b);
*/
//练习:创建数组，包含一组数字，让数字实现从小到大排序(冒泡排序)
var arr=[23,9,78,6,45];
//比较4轮
//1~4
for(var i=1;i<arr.length;i++){
   //1  4  5
   //2  3  5
   //3  2  5
   //4  1  5
   //循环条件 数组长度-i
   for(var j=0;j<arr.length-i;j++){
     //在每次循环中，使用当前的元素arr[j]和下一个元素arr[j+1]比较，如果大于，则位置交换
	 if(arr[j]>arr[j+1]){
	   var c=arr[j];
	   arr[j]=arr[j+1];
	   arr[j+1]=c;
	 }
   }
}
console.log(arr);

