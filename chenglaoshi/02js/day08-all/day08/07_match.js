var str='china是世界上人口最多的国家，China的互联网高度发达，CHINA有好多的程序员，欢迎来china学开发';
//查找china
//console.log( str.search('China') );
//正则表达式写法
//i->ignore  忽略大小写
//console.log( str.search(/China/i) );
//g->global  全局的
//console.log( str.match(/China/ig) );

//查找并替换
console.log( str.replace(/china/ig,'中国') );





