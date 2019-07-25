
  /**
   * 练习  do while 1
   * 
   */

  console.log('\n');

  var i=30;
  do {
      console.log(i)
      i++;

  }while(i<=40)

  /**
   * 练习 do while 2
   */

  console.log('\n');
  var o=50;
  do{
      console.log(o);
      o--;
  }while(o>=40)

/**
 * 3
 */

 console.log('\n')
 var qw=1;
 do {
     if(qw%7===0)
     {
         console.log(qw);
     }
     qw++;

 }while(qw<=100)


 /**
  * 计算1~100之间所有能被3整除的数字的和
  */

  console.log('\n')
  var sum=0;
  var er=1;
  do{
      if(er%3===0)
      {
          sum+=er;
      }

        er++;
  }while(er<=100)
  console.log(sum);

  /**
   * 声明变量保存密码‘123456’，无限循环弹出提示框，输入密码，如果输入正确结束循环
   */


   //第一种 方法
   var yu='123456';
/*    do{
       var pwd=prompt('input pwd');
       if(pwd==yu)
       {
           break;
           alert('pwd right');
       }
   }while(true) */

do{
    var str=prompt('input pwd');
}while(str!==yu)

/* 

    !== 与!=
*/