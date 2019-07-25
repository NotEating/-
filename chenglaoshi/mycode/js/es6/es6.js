/**
 * （1）常见图书对象，包含有图书的编号，名称，价格，
 * 上架时间，是否在售（1/0）；使用模板字符串打印图书信息。
 */

 var book={
    nid:12,
    bname:'acd',
    price:123,
    time:'2018-7-8',
    isOnSale:456
 };
var str=`
图书编号:${book.nid}
名称：${book.bname}
价格：${book.price}
上架时间：${book.time}
是否在售：${book.isOnSale}`;
 console.log(str);