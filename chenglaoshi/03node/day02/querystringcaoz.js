const querystring= require('querystring');
const url=require('url');
var str='https://www.baidu.com/s?wd=%E7%83%AD%E9%97%A8%E4%B8%AA&rsv_spt=1&rsv_iqid=0x802162a200111397&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=8&rsv_sug1=3&rsv_sug7=101&rsv_sug2=0&inputT=1308&rsv_sug4=3858';

var index=str.indexOf('?');
var dellstr=str.slice(index+1);

var date=querystring.parse(dellstr);
console.log(date);

var newarray=[1,2,3,4,5,6,78,8,45,456,45,5,4,4,3,];
var sr=querystring.stringify(newarray);
console.log(sr);

var ab=url.parse(str);
console.log(ab);