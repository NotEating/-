/**
 * 使用冒泡排序实现数组的排序
 * 
 * 10	20	10	45	520	10	33  -》进行一次的结果是让最大值出现在最右边 
 *  前后比较大小的次数是length-1
 * 总循环的次数是length-1次
 */

 function mpSort(arg){
     var changevariable;
     for(var i=1;i<arg.length;i++){

        for(var j=0;j<arg.length-i-1;j++){
            if(arg[j]>arg[j+1]){
                changevariable=arg[j+1];
                arg[j+1]=arg[j];
                arg[j]=changevariable;
            }
        }
     }
     return arg;

 }

 console.log(mpSort([10,20,0,45,52,15,33,88,24,66]));