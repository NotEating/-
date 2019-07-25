/**
 * （2）创建函数，传递两个参数，都是匿名函数的形式，
 * 在匿名函数中返回一个数字。计算两个数字相加的和。
 */

 function fun_ni(a ,b)
 {
     return a()+b();
 }

console.log(

    fun_ni(
        function(){
            return 1;
        },function(){
            return 2;
        }
    )
);

//当将匿名函数当实参，传入函数的时候，匿名函数没有参数
//回调函数能够解决全局污染问题 