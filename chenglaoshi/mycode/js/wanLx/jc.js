/**
 * 求第N的阶乘和
 *  如
 *  1！+2！+3！+4！   
 * 定义两个函数来解决
 * 一个产生1~n的数字
 * 一个球这个数字的阶乘
 * 然后求和
 */
//用来求阶乘
 function JC(N){
     for(var i=1,c=1;i<=N;i++){
        c*=i;
     }
     return c;
 }


 function sumJC(num){
     //产生1~N之间的所有整数
     for(var i=1,sum=0;i<=num;i++){
         sum+=JC(i);
     }
     return sum;
 }

 console.log(sumJC(8));



 /**
  * 用一个函数来实现1~N的阶乘
  * 要求：用一个函数来解决
  * 思路
  *     一边求和一边求阶乘
  *     1！+2!+3！+4！+5！
  *     写出单独求阶乘和单独求和的函数
  *     发现
  *     两个for循环是一样的 循环体不一样
  *     然后写一个for循环，即加入两个循环体
  */


  function getSumJC(N){
      for(var i=1,c=1,sum=0;i<=N;i++){
            c*=i;
          sum+=c;
      }
      return sum;
  }
  console.log(getSumJC(8))