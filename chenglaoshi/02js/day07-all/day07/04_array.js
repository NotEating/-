//创建数组
var name=['tom','jerry','kate'];
//console.log(name);
//练习:创建数组，包含有多个城市名称；创建数组，包含有个笔记本品牌。
var city=['北京','上海','广州','深圳'];
var laptop=['外星人','联想','戴尔','华硕'];
//console.log(city,laptop);
//通过下标访问数组中的元素
//console.log( laptop[4] );
//添加元素
laptop[4]='神舟';
laptop[6]='苹果';
laptop[1]='荣耀';
//console.log(laptop);

//内置构造函数创建
var car=new Array('奥迪','奥拓');
//console.log(car);
//初始化数组元素是5个
var car2=new Array(5);
//单独添加元素
car2[0]='奔驰';
car2[5]='宝马';
//console.log(car2);

//练习：创建数组，保存若干个课程的名称
var course=new Array('mysql','javascript','nodejs','html');
console.log(course);
//练习: 创建数组，初始化元素个数为5，添加篮球场上的五个位置； (大前锋，小前锋，中锋，得分后卫，控球后卫)
var ball=new Array(5);
ball[0]='大前锋';
ball[1]='小前锋';
ball[2]='中锋';
ball[3]='得分后卫';
ball[4]='控球后卫';
//使用数组长度添加元素
ball[ball.length]='教练';
ball[ball.length]='裁判';
//console.log(ball,typeof ball);
//数组也是对象
//查看元素个数
//console.log( ball.length );

//练习: 创建一个空数组，使用数组长度添加若干个国家名称
var country=[];
country[country.length]='中国';
country[country.length]='美国';
country[country.length]='法国';
console.log(country);














