const url=require('url');
const querystring=require('querystring');


var str='http://www.tmooc.cn/free/?cid=18&cname=javascript';
var obj_url_dell=url.parse(str);
var obj_query_dell=querystring.parse(obj_url_dell.query);
console.log(obj_query_dell);
url.format();