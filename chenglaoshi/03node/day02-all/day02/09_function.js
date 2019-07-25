console.log(1);
//立即执行
//开启
var timer=setImmediate( function(){
  console.log(2);
} );
//清除
//clearImmediate(timer);
//立即执行
process.nextTick( function(){
  console.log(4);
} );


console.log(3);
