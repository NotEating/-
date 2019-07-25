/**
 * （4）使用内置构造函数创建一个汽车对象，包含品牌，颜色，价格，排气量
 */

 var neWCar=new Object({
     pp:'奔驰',
     color:'red',
     price:'12313',
     pq:'0.111L'
 });

 var io='pp'
 delete neWCar[io];

 console.log(neWCar);