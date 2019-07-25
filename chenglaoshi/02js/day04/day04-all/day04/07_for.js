/*
var i=1,sum=0;
for(;i<=100;i++){
  sum+=i;
}

var i=1,sum=0;
for(;i<=100;){
  sum+=i;
  i++;
}

var i=1,sum=0;
for(;;){
  sum+=i;
  //console.log(i);
  //如果i为100结束循环
  if(i===100){
    break;
  }
  i++;
}
console.log(sum);

//多个循环条件，后边的起作用
for(var i=1,j=7;j>=1,i<=5;i++,j--){
  console.log(i,j);
}
*/
//练习: 计算1/20+2/18+...+10/2
for(var i=1,j=20,sum=0;i<=10;i++,j-=2){
  //console.log(i,j);
  sum+=i/j;
}
console.log(sum);







