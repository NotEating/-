/**
 * （15）创建数组，使用遍历数组翻转数组中元素
 *  思路：函数内部创建一个空数组，倒循环遍历数组内所有元素
 */
function reSortArray(arg){
    var kongArray=[];
    for(var i=arg.length-1;i>=0;i--){
        kongArray.push(arg[i]);
    }
    return kongArray;
}

console.log(reSortArray([10,20,30,40,50,60]));