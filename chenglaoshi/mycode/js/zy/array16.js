/**
 * （16）创建数组，包含一组数字，让数字实现从小到大排序（冒泡排序）
 *  思路：
 *      声明一个空数组用于存储排序的元素，声明变量，用于变量数据交换；
 *      遍历数组内所有元素,求出数组中元素的最大值。
 * 
 */

 function arraySort(arg){
  var saveArray=[];
  var b=1
  if(b){
      a=arg.length;
      b=0;
  }
  for(var i=0;i<a;i++){
    var min=getMaxOrMin(arg,'Min');
    saveArray.push(min);
    nullarray= returnNewArray(arg,min);
  }
return saveArray;
 }

 console.log(arraySort([20,30,10,2,48,596,45,22]))
 //console.log(arraySort([10,40,70,20,40,10,20,90]));
/**
 * 找到数组中最大值，并返回
 * @param {function} arg 
 */
 function getMax(arg){
      //将数组第一个值赋值给变量，然后进行比较
     var max=arg[0];
     var a=0;
     for(var i=0;i<arg.length;i++){
         arg[i]>=max?max=arg[i]:a++;
     }
     return max;
 }
/**
 * 找到数组中最小值，并返回
 */
function getMin(arg){
    //将数组第一个值赋值给变量，然后进行比较
   var min=arg[0];
   var a=0;
   for(var i=0;i<arg.length;i++){
       arg[i]<=min?min=arg[i]:a++;
   }
   return min;
}

/**
 * 创建函数，求数组内最大值，或最小值
 */

function getMaxOrMin(arg,MaxOrMin){
    var work=1;
    MaxOrMin==='Max'?work=1:work=0;
    if(work){
        var max=arg[0];
        var a=0;
        for(var i=0;i<arg.length;i++){
            arg[i]>=max?max=arg[i]:a++;
        }
    }
    else{
        var min=arg[0];
        var a=0;
        for(var i=0;i<arg.length;i++){
            arg[i]<=min?min=arg[i]:a++;
        }
    }
   return work?max:min;
}

/**
 * 知道数组中指定值，删除数组中值得，返回新数组
 * 
 */

 function returnNewArray(arg,str){
     var newarg=arg;
     for(var i=0;i<newarg.length;i++){
         if(str==newarg[i]){
            newarg.splice(i,1);
         }   
     }
     return newarg;
 }


