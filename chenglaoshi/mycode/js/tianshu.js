/**
 * （2）计算2019/7/16 17:57:45  距离 2019/10/1  6:15:30相差的天，小时，分钟，秒
 */

 var d1=new Date('2019/7/16 17:57:45');
 var d2=new Date('2019/10/1 6:15:30');

 var index=d2-d1;
 var sex=index/1000;
 var day=Math.floor(sex/(24*60*60));
 console.log(day+'天'
 );
var hours=Math.floor(sex%(24*60*60)/(60*60));
console.log(hours+'小时');
var minutes=Math.floor((sex%(24*60*60)%(60*60))/60);
console.log(minutes+'分');
var sec=Math.floor((sex%(24*60*60)%(60*60))%60);
console.log(sec+'秒');