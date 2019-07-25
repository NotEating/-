//创建一个圆对象，含有半径和圆周率属性；添加计算周长和计算面积的方法，返回结果
var circle={
  r:4,
  pi:3.14,
  getLength:function(){
    return 2*this.pi*this.r;
  },
  getArea:function(){
    return this.pi*this.r*this.r;
  },
  //传递半径来计算面积
  getArea2:function(myr){
    return this.pi*myr*myr;
  }
};
console.log( circle.getLength() );
console.log( circle.getArea() );
console.log( circle.getArea2(5) );