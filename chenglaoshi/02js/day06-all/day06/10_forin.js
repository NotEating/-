var person={
  name:'汤姆',
  sex:'男',
  age:18
};
/*
//遍历，访问每一个属性
for(var key in person){
  //键值对
  //key代表每一个属性名
  console.log(key, person[key]);
}
*/
//练习:创建对象，包含有若干个成绩，遍历对象的属性，计算总成绩。
var score={
  chinese:95,
  math:97,
  english:98,
  sports:90
}
//遍历
var sum=0;//用于保存总分
for(var key in score){
  //console.log(key,score[key]);
  //把每一个属性值加到sum中
  sum+=score[key];
}
console.log(sum);










