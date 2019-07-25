/**
 * 练习1
 */
//初始值

var a=30;
//循环条件
while(a<=40)
{
    //循环体
    console.log(a);
    //增量
    a++;
}
console.log('\n');
/**
 * 练习2
 */

 var i=50;
 while(i<=80)
 {
     console.log(i);
     i+=5;
 }


 console.log('\n');

 /**
  * 练习3
  */
 var o=66;
 while(o>=51)
 {
     console.log(o);
     o-=3;
 }


 console.log('\n');
 /**
  * 练习4 打印1-100所有奇数
  *     思路    
  *         1 先产生所有数
  *         2 对所有数进行判断
  */
 var p=0;
 while(p<=100)
 {
     if(p%2===1)
     {
         console.log(p);
     }
     p++;
 }


 /**
  * 练习5 计算1·100之间所有整数的和
  *     思路 1 便利1·100之间的整数
  *         2 进行累加
  *     
  *     
  */

  console.log('\n');
  var q=1;
  var sum=0;
  while(q<=100)
  {
      sum+=q;
      q++;
  }
  console.log(sum);

  /**
   * 练习6
   * 思路   0 声明变量保存数据
   *        1 便利1·100之间的所有数
   *        2 筛选出1·100之间所有偶数
   *        3 进行 求和
   */

   var w=1;
   var e=0;
   while(w<=100)
   {
       if(w%2==0)
       {
           e+=i;
       }
       w++;
  
   }
   console.log(e);

   /**
    * 练习7 
    *   思路    0 初始化 变量用来保存所有数据
    *           1 倒着便利1·10 
    *           2 数据r相乘
    *           3 将阶乘乘数据r相乘
    */
    console.log('\n');
    var r=10;
    var t=1;
    while(r>=1)
    {
        t*=r;
        r--;
    }
    console.log(t);


    /**
     * 扩展 死循环
     *  
     */

        console.log('\n');

    var y=0;
        while(true)
        {
            y++;
            if(y===100)
            {
                console.log('别说话');
                break;
            }

        }

        /**
         * 练习8 
         *  思路 0声明变量u保存1·100之间所有整数
         *       1 死循环
         *       2 条件判断是否到100
         *       3 break 退出循环
         */
        console.log('\n');
         var u=1,k=0;
         while(true)
         {  
             if(u<=100)
             {
                 k+=u;
             }
             else
             {
                 break;
             }
             u++;
         }
         console.log(k);
         /**
          * 方法二
          *    
          *       思路
          *     0声明变量u保存1·100之间所有整数
          *       1 死循环
          *       2 累加
          *       3 判断什么时候到100次 结束循环，结束累加 break 退出循环
          */
         var j=0;
         var h=1;

          while(true)
          {
              j+=h;
              h++;
              if(h==100)
              {
                  break;
              }

          }