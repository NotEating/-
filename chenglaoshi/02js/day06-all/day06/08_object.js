//使用对象字面量
//属性
var laptop={
  title:'戴尔灵越',
  price:4999,
  'size':14.1,
  'made@in':'China',
};
//console.log(laptop);
//练习: 创建一个员工对象，包含有编号，姓名，性别，生日，工资，所属部门
var emp={
  eid:1001,
  ename:'汤姆',
  sex:'男',
  birthday:'1993-8-20',
  dept:'研发部'
};
//console.log(emp);
//练习: 创建一个手机对象，包含有颜色，品牌，尺寸，内存 
var phone={
  color:'黑色',
  brand:'华为P30',
  size:6.19,
  memory:'16G',
  'made in':'China'
};
//修改size的值
//console.log(phone.size);
phone.size=5.9;
phone['made in']='Japan';
phone['memory']='32G';
//访问不存在的属性
//console.log( phone.cpu );
//添加不存在的属性
phone.cpu='麒麟980';
//console.log(phone);

//练习:创建图书对象,包含编号、标题、作者、价格、出版时间；修改图书的价格，打印图书的作者，添加出版社属性。
var book={
  bid:2005,
  title:'JavaScript高级程序设计',
  author:'尼古拉斯.扎卡斯',
  price:99,
  pubDate:'2017-9-1'
};
//修改价格
book.price=79;
//打印作者
console.log( book['author'] );
//添加出版社
book.publish='人民邮电出版社';
console.log(book);
