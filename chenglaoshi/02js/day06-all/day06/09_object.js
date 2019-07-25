//使用内置构造函数
var person=new Object();//{}
//单独添加属性
person.name='杰瑞';
person['age']=18;
//console.log(person);
//练习: 创建一个汽车对象，包含品牌，颜色，价格，排气量
var car=new Object();
car.brand='BYD-F3';
car.color='黑色';
car['price']=45000;
car['dis']='1.5T';
console.log(car);




