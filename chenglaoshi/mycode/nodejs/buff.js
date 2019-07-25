/**
 * （1）每隔3秒打印‘Hello’，打印完第三次，清除定时器。
 */

 var st= global.setInterval(() => {
     console.log('hello');
     let num=0;
     num++;
     if(num==3){
         clearInterval(st);
     }
    
     
 }, 3000);