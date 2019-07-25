var uri='http://www.jd.com/search?kw=笔记本';
//对URI中汉字进行编码
var str1=encodeURI(uri);
//对以编码的URI进行解码
var str2=decodeURI(str1);
//console.log(str1);
//console.log(str2);

//console.log(-2/0);//Infinity
//查看一个值是否为有限值
//console.log( isFinite(1/3) );

//执行字符串中的表达式
console.log('1+3');
console.log( eval('typeof 3') );










