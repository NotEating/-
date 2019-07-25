/**
 * （9）创建数组，包含多个姓名，把姓名为‘king’的全部替换成‘金’
 * 
 * （10）创建数组，包含多个姓名，统计king出现的次数
 */

 var keyss=['king','yucheng','king'];

 var num=0;
 for(var i=0;i<keyss.length;i++){
     if(keyss[i]=='king'){
         //keyss[i]='金';
         num++;
     }
 }
 console.log(num);


 /**
  * （11）创建数组。包含多个数字，查找最大值
  */

 var keys01=['11','19','13',2018];
var lis=0;
 for(var i=0;i<keys01.length;i++){
     if(keys01[i]>lis){
         lis=keys01[i];
     }
 }
 console.log(lis);

 /**
  * （12）创建函数，传递一个参数（数组），返回这组数字的平均值
  */

  function getAvg(avg){
      for(var i=0,sum=0;i<avg.length;i++){
          sum+=avg[i];
      }
      return (sum/avg.length);
  }

  console.log(getAvg([12,45,78,56,89,123,456]));


  var arr=[10,20,30];
  console.log(arr.join('\n'));


  var course =['mysql','js','nodeJs','html','ajax','css','bootstrap']


  /**
   * （13）创建数组a~g每个字母是一个元素，
   * 分别截取cd，f，b；把截取的数组拼接成一个新数组。
   */

   var agArr=['a','b','c','d','e','f','g'];
console.log(
    agArr.slice(2,4).concat(agArr.slice(5,6),agArr.slice(1,2)));

    var x=10,y=20;
    console.log(x++ +y-- + ++x+y++)
    