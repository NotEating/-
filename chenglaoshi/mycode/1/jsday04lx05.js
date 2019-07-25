/**
 * 打印1~10之间所有整数
 */

 for(var i=1;i<=10;i++)
 {
     console.log(i); 
 }

 /**
  * 打印80 75 70 65 60
  * 计算1~100之间所有奇数的和
  */

  for(var i=80;i>=60;i-=5)
  {
      console.log(i);
  }

  for(var i=1,sum=0;i<=100;i++)
  {
      if(i%2===1)
      {
          sum+=i;
      }
  }
  console.log(sum);

  console.log('\n')


  /**
   * 计算1~20之间所有能被3整数的数字乘积
   * 
   * 打印2000~2100之间所有的闰年
   */

   for(var i=1,j=1;i<=20;i++)
   {
       if(i%3===0)
       {
           j*=i;
       }
   }
   console.log(j);


   for(var i=2000;i<=2100;i++)
   {
       if(i%4===0 && i%100!==0 ||i%400===0)
       {
           console.log(i);
       }
      
   }

   console.log('\n')
  /***
   * 
   * 1*1=1 1*2
   * 循环产生1~5，拼接起来，最后拼接
   */


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

 console.log('\n')


/**
 * 计算1/20 +2/18....10/2
 * 
 *  1 求和
 *  2 分母和分子一起变
 *  3分母减2.分子增1
 */

 for(var i=1,j=20,sum02=0;i<=10;i++,j-=2)
 {
   sum02+= i/j  
 }
 console.log(sum02);