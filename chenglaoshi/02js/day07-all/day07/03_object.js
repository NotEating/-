//原始类型存储
var a=1;
var b=a;
//改变a的值
a=3;
//b没有收到影响
//console.log(b);//1

//引用类型存储
var car={
  brand:'奥迪A6',
  price:400000
}
//把对象car的地址复制给了car2，两个变量指向到了同一个对象，无论使用哪一个变量修改对象中属性，另一个也会发生变化
var car2=car;
//修改car的属性
car.brand='奥拓';
//修改car2的属性
car2.price=150000;

//console.log(car);
//console.log(car2);
//销毁对象，释放内存空间
//原理: 对象不再被地址所引用，自动销毁
car=null;  //不再指向任何的对象
car2=null;

console.log(typeof null);




