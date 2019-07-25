/**
 * （3）创建函数，封装计算1~100之间所有整数的和，调用3次
 */

 function fun03(start,end)
 {
     var sum=0;
     for(var i=start;i<=end;i++)
     {
        sum+=i;
     }
     return sum;
 }

console.log(fun03(1,100));
console.log(fun03(5,100));
console.log(fun03(10,100));


/**
 * （4）计算任意两个数字相加的和
 */

 function sum(num_a,num_b)
 {
     return num_a+num_b;
 }

 console.log(sum(11,2))

 console.log()