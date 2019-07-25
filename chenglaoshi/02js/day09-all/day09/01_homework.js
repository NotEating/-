//练习:将一句英文每个单词的首字母大写，其余小写
/*
var str='hOw arE yOu';
//按照空格分隔为数组
var arr=str.split(' ');
//遍历数组，获取每个单词元素
for(var i=0;i<arr.length;i++){
  //console.log( arr[i] );
  //将首字母转大写，其余转小写
  var first=arr[i].substr(0,1).toUpperCase();
  var other=arr[i].substr(1).toLowerCase();
  //把转换的结果，替换之前的元素
  arr[i]=first+other;
}
//把arr转换成字符串
console.log(arr.join(' '));
*/
//练习:创建数组，包含0~9，a~z，随机取4个字符，放入到一个新数组中。
var arr1=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k'];
//21  0~20
var arr2=[];
//循环4次
for(var i=0;i<4;i++){
  //取随机 0~20
  //0~1 * 21  0~20.999  向下取整  0~20
  var index=Math.floor(Math.random()*arr1.length);
  //通过下标找对应元素
  //console.log( arr1[index] );
  //把取到随机字符，放入到新数组
  arr2.push( arr1[index] );
  //删除取到这个元素 
  //开始的下标，删除1个元素
  arr1.splice(index,1);
}
console.log(arr2);



