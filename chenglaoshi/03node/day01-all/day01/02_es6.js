//1.函数增强
//计算任意3个数字相加的和
function add(a,b,c=0){
  console.log(a+b+c);
}
//add(2,7);
//add(2,7,4);

//2.模板字符串
var ename='King';
var age=18;
var sex=1;
var str=`
姓名: ${ename}
性别: ${sex===1?'男':'女'}
年龄: ${age+5}
`;
//console.log(str);


//练习:创建图书对象, 包含有图书的编号，名称，价格，上架时间，是否在售(1/0)；使用模板字符串打印图书信息
var book={
  bid:1001,
  title:'JavaScript高级程序设计',
  price:99,
  shelfTime:1528700000000,
  isOnsale:1
};
var d=new Date(book.shelfTime);

console.log(`
编号: ${book.bid}
书名: ${book.title}
价格: ${book.price.toFixed(2)}
上架时间: ${d.getFullYear()}年${d.getMonth()+1}月
是否在售: ${book.isOnsale===1?'是':'否'}
`);




