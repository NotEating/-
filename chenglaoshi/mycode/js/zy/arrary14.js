/**
 * （14）创建函数，传递两个参数（数组，值），
 * 如果值存在数组中，返回满足条件的第一个的下标，
 * 找不到返回-1；
 *      思路：
 *          1、将数组值进行遍历，判断是否和值相等，相等返回下标
 *          2、找不到返回-1
 */

 function isArrayGetIndex(arg,num){
     var index;
     for(var i=0;i<arg.length;i++){
        index=arg[i]==num?i:-1;
     }
     return index;
 }
console.log( isArrayGetIndex([10,20,30,40,50],60));