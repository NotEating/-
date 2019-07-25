//弹出提示框输入商品价格和数量
var price=prompt('input price');
var num=prompt('input number');
//获取总价
var total=price*num;
//判断是否满500
if(total>=500){
  //打九折
  total*=0.9;
}
//卡内余额800
var card=800;
if(card>=total){//足以支付
  alert('pay success')
}else{
  alert('pay error');  
}

//console.log(total);
