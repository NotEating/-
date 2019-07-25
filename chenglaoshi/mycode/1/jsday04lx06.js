/**
 * 计算1~100之间所有偶数的和，遇到奇数跳过
 */


 for(var i=1,sum=0;i<=100;i++)
 {
     if(i%2===1)
     {
         continue;
     }
     sum+=i;
 }
 console.log(sum);

  /**
   * 打印1~100之间所有的整数，不包含所有能被3整除或者4整除的数字
   */

   for(var i=1;i<=100;i++)
   {
       if(i%3===0||i%4===0)
       {
           continue;
       }
       console.log(i);
   }

   /**
 * 打印的时候只会一行一行打印
 *      所有每行只有进行字符串拼接
 * 
 * 
 *  1*1=1
 *  1*2=2 2*2=4 
 */

 for(var i=1;i<=9;i++)
 {
    var sum='';
     for(var j=1;j<=i;j++)
     {     
         sum=sum+j+'*'+i+'='+i*j+'\t';  
          
     } 
     console.log(sum);
 }

 /**
  * 打印的时候只会一行一行打印 ->循环9次
  * 每一行 字符串拼接是不一样的
  *  i  j<=i  j=1
  * 
  */
 var su='';

  for(var i=1;i<=5;i++)
  {
      su+='*';
  }
  console.log(su);


  for(var i=1;i<5;i++)
  {
     var str=''
      for(var j=1;j<=5;j++)
      {
          str+='*';
      }
      console.log(str);
  }


  /**
   * 总结 外层循环 内层循环
   *    内外循环的关系
   */
  for(var i=1;i<5;i++)
  {
      
      for(var j=1,su='';j<=i;j++)
      {
        su+='*';
      }
      console.log(su);
  }


  var wc=1;
while(wc<=9)
{
    var nc=1;
    var sum='';
    while(wc>=nc)
    {
        sum=sum+nc+'*'+wc+'='+wc*nc+'\t';  
        nc++
    }
    console.log(sum);
    wc++;
    
}



