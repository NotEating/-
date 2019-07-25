/**
 * 练习 
 *  0 声明变量保存数字
 *  1 分析有3种条件，只有一种可以跳出循环
 *  
 */

 var q=18;
 while(true)
 {
     var w=prompt('输入');
     if(parseInt(w)>q)
     {
         alert('big')
     } else if(parseInt(w)<q){
         alert('SMALL')
     }
     else{
         if(isNaN(w))
         {
             alert('请输入数字');
         }
         else{
            alert('right');
            break;
         }

     }

 }

 /**
  * 总结  第一点
  *         Number()转换问题 ‘’=》0 '1as'=>NaN '12'->12
  *         isNaN()方法判断是否为数字
  *         prompt() 返回值
  *         关系运算 隐式转换
  */

