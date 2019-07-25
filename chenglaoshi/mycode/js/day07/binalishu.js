/**
 * 
 * （7）创建索引数组，包含若干个城市名称，使用for-in遍历数组，打印每个元素

 */

 var newarray=['北京','上海','chengdu','guangzou'];


 for( var key in newarray){
     console.log(key,newarray[key]);
 } 


 /*****
  * （8）创建数组，包含有若干个成绩，遍历数组获取每个成绩，计算总分 要求 使用for循环
  */

  var ar=[12,78,99,120];



  for(var i=1,sum=0;i<ar.length;i++){
     sum+=ar[i];
  }
  console.log(sum);