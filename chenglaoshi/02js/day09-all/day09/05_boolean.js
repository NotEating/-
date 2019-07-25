//false: 0 NaN '' undefined null
var b1=new Boolean(0);//对象
var b2=Boolean(NaN);//布尔型

console.log(b1,typeof b1);
console.log(b2,typeof b2);

console.log( Boolean([]) );
//隐式转为布尔型
console.log(!!null);
