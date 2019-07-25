/**
 * （6）创建函数，计算任意两个年份之间的闰年个数
 *      思路：
 *          
 */

 function fun06(start,end){
     var num=0;
     for(var i=start;i<=end;i++)
     {
         if(i%4===0&&i!==100||i%400==00)
         {
             num++;
         }
     }
     return num;
 }

 console.log(fun06(2000,2019));