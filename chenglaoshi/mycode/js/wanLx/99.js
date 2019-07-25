/**
 * 打印9*9乘法表
 * 思路
 *     1、要打印9行，其中每一行是进行了字符串拼接
 *     2、每一行的列数，与行数有关，是一一对应的
 */

 function print99(){
     //打印9行
     for(var i=1;i<=9;i++){
         for(var j=1,su='';j<=i;j++){
             su+=j+'*'+i+'='+i*j+'\t';
         }
         console.log(su);

     }
 }


 /**
  * 打印倒着的99乘法表
  * 思路
  *     打印9行，
  *     第一列为 9次 8次，那将外循环改成减循环
  */
function daoPrint99(){
    for(var i=9;i>=1;i--)
    {
        for(var j=i,su='';j>=1;j--)
        {
            su+=j+'*'+i+'='+i*j+'\t';

        }
        console.log(su);
    }
}
daoPrint99();

