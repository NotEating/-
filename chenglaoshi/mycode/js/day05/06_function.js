/**
 * 递归定义：在函数内部调用自身，本身是一个死循环
用法：需要有结束条件，结合return
 * 
 * 
 * 
 * 斐波那契数列
    第1是1，第2是2，从第3项开始，，没项的值是前两项相加的和

    项数 为n
    前两项相加为 后一项的值
 */


//  function error(n){
//      var a1=1;
//      var a2=1;
//      if(n)
//      {
//       var a=Number(n-1);
//       var b=Number(n-2);
//       a1=error(a)+error(b);
//      }
//      else{
//        return a1;
//      }
//  }


 /**
  *
  * 1	2	3	4	5	6 项数n

    1	1	2	3	5	8 数列
		    a1a2
    思路：

      前两项的和为后一项

      挪动时变量之间存在数据交换

      挪动多少次 -》循环多少次
  * 
  * 
  */
 

  function fb(n)
  {
    var n1=1,n2=1;
    //每次挪动，n1的值是上一次n2的值
    //n2的值，上一次n1+n2
    for(var i=3;i<=n;i++)
    {
      var c=n1;
      n1=n2;
      n2=c+n2;
    }
  }


 /**
  * （1）计算1~n之间所有整数和
  */


  function getNum(n){
  if(n===1)
  {
    return 1;
  }
  return n+getNum(n-1);
  }
  
//console.log(getNum(5))


/**
 * 用递归实现斐波那契数列
 */

 function dg(n){
   if(n===1||n===2)
   {
    return 1;
   }
  

   return dg(n-1)+dg(n-2);
 }
 console.log(dg(10));