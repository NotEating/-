//全局污染: 变量或者函数放到了全局作用域下
//解决全局污染: 把变量或者函数放到函数作用域下

(function(){
  //第1组轮播图
  var num=2;
  console.log(num);
})();

(function(){
  //第2组轮播图
  var num=3;
})();

(function(a){
  //第3组轮播图
  var num=5;
  console.log(a);
})(18);

//console.log(num);



