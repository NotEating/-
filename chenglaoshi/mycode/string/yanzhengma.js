/**
 * 红球
 * 1-33 随机取6个数 且不能重复
 * 蓝球 在1-16之间随机取1个，可以和红球重复
 * 
 */

 function cp(){
     var str1='1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33';
    var str2='1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16';
    var redArray=str1.split(' ');
    var lanArray=str2.split(',');
    resArray=[];
    for(var i=0;i<=6;i++){
        var index=Math.floor(Math.random()*redArray.length);
        resArray.push(redArray[index]);
        redArray.splice(index,1);
    }
    for(var j=0;j<1;j++){
        var index2=Math.floor(Math.random()*str2.length);
        resArray.push(lanArray[index]);    
    }
    return resArray.join();
 
    }

    console.log(cp());