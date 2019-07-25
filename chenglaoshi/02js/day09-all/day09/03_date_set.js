/*
var d1=new Date('2019/7/16 14:28:30');
//复制一个d1对象
var d2=new Date(d1);
//设置30分钟以后
d1.setMinutes(58);
d1.setHours(17);
d1.setMonth(11);
//没有setDay方法
//d1.setDay(3);
//d1.setTime(1467800000000);
//3年后：先获取当前的年份，然后加3，把结果设置为当前的年份
d1.setFullYear( d1.getFullYear()+3 );
//设置一星期后
d1.setDate( d1.getDate()+7 );

console.log( d1.toLocaleString() );
console.log( d2.toLocaleString() );
*/
//练习: 创建Date对象，保存员工的入职时间'2019/7/16'，合同期为3年，计算到期时间
//入职时间
var d1=new Date('2019/7/19');
//到期时间,复制一个入职时间
var d2=new Date(d1);
//设置3年后到期
d2.setFullYear( d2.getFullYear()+3 );
//续签时间,复制到期时间
var d3=new Date(d2);
//提前一个月
d3.setMonth( d3.getMonth()-1 );
//判断是否为周末
var day=d3.getDay();
console.log(day);
if(day===6){//周六
  //提前一天
  d3.setDate( d3.getDate()-1 );
}else if(day===0){//周日
  //提前两天
  d3.setDate( d3.getDate()-2 );
}

console.log('入职时间:'+d1.toLocaleDateString());
console.log('到期时间:'+d2.toLocaleDateString());
console.log('续签时间:'+d3.toLocaleDateString());





