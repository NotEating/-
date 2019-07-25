//满30减15
var total=26;
if(total>=30){
  //在当前的基础之上减15
  total-=15;// total=total-15;
}
//console.log(total);
//练习: 声明变量保存年龄，如果满18打印成年人
var age=17;
if(age>=18){
  console.log('成年人');
  console.log('可以去网吧了');
}

//age>=18 && console.log('成年人');

//if后的条件表达式数据形式
//false的几种情况: 0  NaN  ''  undefined  null
if(null){
  console.log(1);
}
//练习: 声明变量保存个人签名，判断签名是否为空字符，如果为空，赋值为'这家伙很懒，什么也没留下'； 打印签名
var str='今天的天气不太热';
//str===''  和空字符比较
if(!str){
  //如果为空，添加赋值
  str='这家伙很懒，什么也没留下';
}
console.log(str);


//判断一个值是否为非数字  isNaN
//是NaN -> true   不是NaN -> false
// 自动调用Number转数字
console.log( isNaN('1a') );
//练习: 声明变量保存一个值，如果不是数字，打印'请输入一个数字'
var age='18';
if( isNaN(age) ){//如果输入的值不是数字(NaN)
  console.log('请输入一个数字');
}





