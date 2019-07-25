var score=71;
//  parseInt(分数/10)
var num=parseInt(score/10);
//10 9 8 7 6 ...
switch(num){
  case 10:
  case 9:
	console.log('优秀');
    break;
  case 8:
	console.log('良好');
    break;
  case 7:
	console.log('中等');
    break;
  case 6:
	console.log('及格');
    break;
  default:
	console.log('不及格');
}



