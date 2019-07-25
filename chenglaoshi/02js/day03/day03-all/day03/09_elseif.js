var type='少先队员';
if(type==='党员'){
  console.log('这个人是党员');
}else if(type==='团员'){
  console.log('这个人是团员');
}else if(type==='群众'){
  console.log('这个人是群众');
}else{
  console.log('不合法的政治面貌');
}

//练习: 声明变量保存订单的状态码，根据状态打印对应的汉字内容
//1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消  其他-无法追踪
var status=8; 
if(status===1){
  console.log('等待付款');
}else if(status===2){
  console.log('等待发货');
}else if(status===3){
  console.log('运输中');
}else if(status===4){
  console.log('已签收');
}else if(status===5){
  console.log('已取消');
}else{
  console.log('无法追踪');
}

/*
优秀   90~                  9/10
良好   80~90以下   8.0~8.9   8
中等   70~80以下   7.0~7.9   7
及格   60~70以下   6.0~6.9   6
不及格 60以下
//声明变量保存成绩，根据成绩打印对应标准。
*/
var score=47;
if(score>=90){
  console.log('优秀');
}else if(score>=80){//score<90
  console.log('良好');
}else if(score>=70){  //score<80
  console.log('中等');
}else if(score>=60){ //score<70
  console.log('及格');
}else{  //score<60
  console.log('不及格');
}
/*
普通客户  0~10以下
优质客户  10~100以下
金牌客户  100~500以下
钻石客户  500~
*/
var money=108;
if(money<10){
  console.log('普通客户');
}else if(money<100){ //money>=10
  console.log('优质客户');
}else if(money<500){ //money>=100
  console.log('金牌客户');
}else{  //money>=500
  console.log('钻石客户');
}

