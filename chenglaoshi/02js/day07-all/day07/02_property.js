var person={
  name:'凯特',
  sex:'女'
};
//检测属性是否存在
//和undefined比较
/*
console.log( person.age===undefined );
//预定义方法，js提供好的
console.log( person.hasOwnProperty('age') );

console.log( 'name' in person );
*/
//练习: 创建一个手机对象，添加属性有品牌，颜色；添加方法用于介绍手机，返回‘手机的品牌为？，颜色？，价格？’，如果价格属性不存在，设置价格为4999.
var phone={
  brand:'华为P30',
  color:'白色',
  say:function(){
    //判断价格属性是否存在
	//如果不存在，添加价格属性为4999
	//this.price===undefined
    if( !this.hasOwnProperty('price') ){
	  this.price=4999;
	}
	return '手机品牌为'+this.brand+',颜色为'+this.color+',价格为'+this.price;
  }
}
//调用方法
console.log( phone.say() );



