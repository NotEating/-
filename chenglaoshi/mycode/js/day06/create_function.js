/**
 * 
 * （1）使用函数表达式创建函数，计算任意两个数字之间所有整数的和，返回结果。
 */

 var fun=function(num_a,num_b)
 {
     var sum=0;
     for(var i=num_a;i<=num_b;i++)
     {
         sum+=i;
     }
     return sum;
 }

 console.log(fun(1,2));