//创建buffer  --16:20
//var buf=Buffer.alloc(5,'abxyz');
//var buf=Buffer.alloc(6,'一二三四五');
var buf=Buffer.alloc(6,'a');
console.log(buf);
//转成字符串
console.log( String(buf) );
console.log( buf.toString() );