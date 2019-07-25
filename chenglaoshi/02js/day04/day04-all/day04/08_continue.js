//打印1~10，不包含5
/*
for(var i=1;i<=10;i++){
  //当i为5的时候，跳过后边的语句，执行自增
  if(i===5){
    //continue;
	break;
  }
  console.log(i);
}

//练习: 计算1~100之间所有偶数的和，遇到奇数跳过
for(var i=1,sum=0;i<=100;i++){
  //如果i的值为奇数，跳过
  if(i%2===1){
    continue;
  }
  sum+=i;
}
console.log(sum);
*/
//练习: 打印1~100之间所有的整数，不包含所有能被3整除或者4整除的数字
for(var i=1;i<=100;i++){
  //判断i是否能被3或者4整除
  if(i%3===0 || i%4===0){
    continue;
  }
  console.log(i);
}



