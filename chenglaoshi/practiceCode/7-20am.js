// function generateRandomAlphaNum(len) {
//     var rdmstring = "";
//     rdmString  += 
//     return  rdmString.substr(0, len);
// }

// console.log(Math.random().toString(36).substr(2));

// var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
// numbers = numbers.sort(function(){ return Math.random() - 0.5});

// console.log(...numbers)


// var str='    kjafhkh afhklash lasalhf lash ';
// console.log(str.trim());

// function isNum(n){
//     return !isNaN(n);
// }
// console.log(isNum(2/0));
// console.log( typeof 2/0)

// var str='123134656421131';
// var arr=str.split('');
// arr.splice(0);
// console.log(...arr);

// var foo=10;
// foo===10&&console.log(foo);
/**
 * 默认值赋值问题
 */
// function fun01(a){
//     arg=a ||10;
//     console.log(a);
// }
// fun01();


/**
 * 
0.1 + 0.2 === 0.3
 */

//  console.log(0.1 + 0.2 == 0.3);

var a = 20;
var b = (++a,10);
console.log(b);