var str='javascript';
//获取字符的长度
//console.log( str.length );
//console.log( str[2] );//数组
//console.log( str.charAt(2) );//方法
//console.log( 'a'.charCodeAt() );
//获取字符串中a出现的次数
//遍历字符串，获取每个字符
/*
for(var i=0,sum=0;i<str.length;i++){
  //console.log( str.charAt(i) );
  //判断字符是否为a
  if(str.charAt(i)==='a'){
    sum++;
  }
}
console.log(sum);


//获取字符的下标
var str='javascript';
//console.log( str.indexOf('a') );
//console.log( str.indexOf('a',2) );
//倒着查找
//console.log( str.lastIndexOf('a') );
console.log( str.indexOf('m') );

//练习: 声明变量保存邮箱字符串，检测该变量中是否含有@，如果有打印'合法的邮箱'，否则打印'非法的邮箱'
var email='tom@126.com';
if( email.indexOf('@')===-1 ){
  console.log('非法的邮箱');
}else{
  console.log('合法的邮箱');
}


//英文字母转大写或者小写
var str='JavaScript';
//转大写
console.log( str.toUpperCase() );
//转小写
console.log( str.toLowerCase() );


//截取字符串
var str='javascript';
console.log( str.slice(0,4) );
console.log( str.slice(4) );
console.log( str.slice(-3,-1) );

//练习: 声明变量保存邮箱，分别截取邮箱的用户名和服务器名称
var email='hello@tedu.cn';
//查找@的下标
var index=email.indexOf('@');
//console.log(index);
//截取用户名0~@的下标
console.log( email.slice(0,index) );
//截取服务器名称 @下一位~
console.log( email.slice(index+1) );


//按照长度截取字符串
var str='javascript';
console.log( str.substr(4) );
console.log( str.substr(4,3) );
console.log( str.substr(-3,2) );


//练习: 声明变量保存字符串(身份证号),截取出生的年月日和性别，打印'1997年10月20日 性别男'
var id='110230199710203579';
//分别截取年月日，性别
var year=id.substr(6,4);
var month=id.substr(10,2);
var date=id.substr(12,2);
var sex=id.substr(-2,1);
var s = sex%2===1?'男':'女';
console.log(year+'年'+month+'月'+date+'日 性别'+s);


var str='javascript';
console.log( str.substring(4) );
console.log( str.substring(4,7) );
//如果是负数，自动转为0
console.log( str.substring(-3) );
//下标自动从小到大
console.log( str.substring(7,4) );

//练习:声明变量保存一个单词(heLLo)，将首字母转大写，其余字母转小写。
var str='heLLo';
//截取首字母,转大写
var first=str.substring(0,1).toUpperCase();
var other=str.substring(1).toLowerCase();
console.log(first+other);

//数组转字符串
var arr=['html','css','js'];
//String
var str=arr.join('-');
console.log(str);
//字符串转数组
console.log( str.split('-') );
*/
//练习: 使用split截取邮箱中的用户名和服务器名称
var email='tom123@126.com';
var arr=email.split('@');
console.log(arr[0],arr[1]);

/*
  hOw arE yOu -> How Are You
*/






