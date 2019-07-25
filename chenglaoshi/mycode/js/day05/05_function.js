
 /**
  * 创建函数，计算1~任意数字之间所有整数的阶乘，并返回结果
  */

  function getJC(start=1,end)
  {
      var res=1;
      for(var i=start;i<=end;i++)
      {
          res*=i;
          
      }
      return res;
  }

  //console.log(getJC(1,3));



 function sum(num){
     var su=0;
     for(var i=1;i<=num;i++)
     {
        
         su+=getJC(1,i);
     }
     return su;
 }
 console.log(sum(3));

  /**
   * 
   * @param {number} start 
   * @param {number} end 
   */

  /**
 * （12）要求计算1~任意数之间所以整数阶乘的和
 * 
 * 单个函数解决  
 */


 /**
  * 
  *1!+2!+3!
  1 
  */

 function sumJC(end)
 {
    for(var i=1,sum=0;i<=end;i++)
    {
        for(var j=i,res=1;j>=1;j--)
        {
            res*=j;   
            console.log(res+'-'+j);
        }
        sum+=res;
    } 

    return sum;
 }

console.log(sumJC(3))

