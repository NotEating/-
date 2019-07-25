//计算2019/7/16 17:57:45 距离 2019/10/1 6:15:30相差的天，小时，分钟，秒
//创建两个对象
var d1=new Date('2019/7/16 17:57:45');
var d2=new Date('2019/10/1 6:15:30');
//计算相差的毫秒数
var d=d2-d1;
//单位转为秒
d=Math.floor(d/1000);
//转为相差的天数
var day=Math.floor(d/(24*60*60));
//计算相差的小时，去除相差的天数
var hours=d%(24*60*60);//秒
//转为小时
hours=Math.floor(hours/(60*60));
//计算相差的分钟，去除相差的小时
var minutes=d%(60*60); //秒
//转为分钟
minutes=Math.floor(minutes/60);
//计算相差的秒，去除相差的分钟
var seconds=d%60;//秒
console.log(seconds);



