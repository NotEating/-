console.log(1);
console.info(2);
console.warn(3);
console.error(4);

//检测程序的运行时间
//let在同一级作用域下，不允许声明多次。
//开始计时
console.time('while');
let i=1;
let sum=0;
while(i<=10000){
  sum+=i;
  i++;
}
console.timeEnd('while');

console.time('do-while');
i=1;
sum=0;
do{
  sum+=i;
  i++;
}while(i<=10000);
console.timeEnd('do-while');

console.time('for');
for(let i=1,sum=0;i<=10000;i++){
  sum+=i;
}
console.timeEnd('for');



