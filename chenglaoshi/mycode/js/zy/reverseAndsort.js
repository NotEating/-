/**
 * 数组reverse和sort方法
 */


 var a=[10,20,3,40,78,54,22];

 console.log(a.sort(
     function (a,b){
         return a-b;
     }
 ));

 console.log(a.reverse());