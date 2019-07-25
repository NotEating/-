/**
 * （1）计算1~100之间所有整数的和，使用let声明变量，计算总和
 */

 function a(){
     let sum=0;
    for(let i=0;i<=100;i++){
        sum+=i;
    }
    console.log(sum);
 }

 /**
  * 箭头函数
  */

  var arr=[23,9,78,6,445,5,54,12];
  console.log(arr.sort(
      (a,b)=>{
        return (a-b);
      }
  ));