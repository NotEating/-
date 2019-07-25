//引入官方提供核心模块————querystring
const querystring=require('querystring');
//查询字符串
var str='keyword=电脑&enc=utf-8';
//将查询字符串解析为对象
var obj=querystring.parse(str);
//console.log(obj.keyword);
//将对象格式化为查询字符串
var str2=querystring.stringify(obj);
//console.log(str2);
var str3='price=4999&pname=dell';
var obj3=querystring.parse(str3);
console.log(obj3.price,obj3.pname);

