/**
 * （1）将一句英文每个单词的首字母大写，其余小写 hOw arE yOu ->how Are You
创建数组，包含0~9，a~z,随机取4个字符，放入到一个新数组中。
原理： 36 下标0~35 随机取4个下标
预习Date对象
 */

 function changeWord(str){
     var b=[];
     var s=str.split(' ');
     for(var i=0;i<s.length;i++){    
         b.push(s[i].toLowerCase().slice(0,1).toUpperCase()+s[i].toLowerCase().slice(1).toLowerCase());
     }
     return b.join(' ');

 }
 console.log(changeWord('hOw arE yOu'));

 function getRand(str){
     var oneArray=str.split('');
     
     var newArg=[];
     for(var i=0;i<4;i++){
         newArg.push(oneArray[Math.round(Math.random()*10)]);
     }
   return  newArg;

 }
 console.log(getRand('123456789abcdefghijklmnopqrsguvwsyz'));