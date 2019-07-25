/**
 * （2）计算距离2019/9/13还有多少天，多少小时，多少分，多少秒
 */


 var nowdate=new Date();
 var mbdate=new Date('2019/9/13');

 var index=mbdate-nowdate;
    //对时间秒处理
    secChange(index);

 function secChange(sec){
     sec=sec/1000;
     var day=Math.floor(sec/(24*60*60));
     console.log(day+'天');
     var lin=sec%(24*60*60);
     var hours=Math.floor(lin/(60*60));
     console.log(hours+'小时');
     lin2=lin%(60*60);
     var min=Math.floor(lin2/60);
     console.log(min)+'分钟';
     se=Math.floor(sec%(24*60*60)%(60*60)%60);
     console.log(se+'秒');
 }