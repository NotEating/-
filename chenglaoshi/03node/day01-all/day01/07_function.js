//var num=global.parseInt(3.14);
//console.log(num);

//1.一次性定时器
//当间隔时间到了，执行回调函数
/*
var timer=global.setTimeout( function(){
  console.log('嘣嘣嘣！');
},3000 );
//清除
global.clearTimeout(timer);


//2.周期性定时器
var timer=setInterval( ()=>{
  console.log('嘀嘀嘀!');
},3000 );
//清除
clearInterval(timer);
*/

//练习：每隔3秒钟，打印一次'hello'，打印完第3次，清除定时器 
var i=0;
var timer=setInterval( ()=>{
  console.log('hello');
  i++;
  //当i为3的时候，清除定时器
  if(i===3){
    clearInterval(timer);
  }
},3000 );













