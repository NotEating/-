//在全局作用域下创建的函数
function fn1(){
  //fn3();
}
fn1();
function fn2(){
  //在函数作用域下创建的函数
  function fn3(){
    console.log(3);
  }
  fn3();
}
fn2();



