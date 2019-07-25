/**
 * 控制台对象
 */
// console.time('自定义字符串');
// console.timeEnd('自定义字符串')

console.time('1');
var i=0,sum=0;
while(i<=100){
  sum+=i;
    i++;
}
console.log(sum);
console.timeEnd('1');

var q=0,su=0;
do{
    su+=q;
    q++;

}while(q<=100)
