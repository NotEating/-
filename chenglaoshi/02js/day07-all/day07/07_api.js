//var arr=[10,20,30];
//把数组转为字符串
//console.log( arr.toString() );
//按照指定的字符把数组元素分割为字符串
//console.log( arr.join('') );

//var arr1=['tom','jones','richad','Lucy'];
//var arr2=['chris','paul'];
//拼接多个数组
//console.log( arr1.concat(arr2) );
/*
var course=['mysql','js','nodejs','html','ajax','css','bootstrap'];
//截取数组中的元素
//console.log( course.slice(1) );
//console.log( course.slice(1,3) );
//console.log( course.slice(-3,-1) );

//练习: 创建数组a~g，每个字母是一个元素，分别截取cd，f，b；把截取的数组拼接成一个新数组
var arr=['a','b','c','d','e','f','g'];
var arr1=arr.slice(2,4);//cd
var arr2=arr.slice(-2,-1);//f
var arr3=arr.slice(1,2);//b
console.log( arr1.concat(arr2,arr3) );
*/
var course=['mysql','js','nodejs','html','ajax','css','bootstrap'];
//删除数组中的元素
//作用：删除数组元素
//参数: 参数1开始下标  参数2删除的长度  参数3... 删除后补充的元素
//返回值: 返回删除后的元素，格式为数组
console.log( course.splice(1,0,'jquery','vuejs') );
console.log( course );








