var circle ={
    R:'30',
    PI:'3.14',
    method:function(){
        return this.PI*this.R*this.R;
    }
}

/**
 * (6)创建一个手机对象，添加属性有品牌，
 * 颜色；添加方法用于介绍手机，返回 ’手机的品牌为？，
 * 颜色，价格？，如果价格属性不存在，设置价格为4999
 */

 var phone={
    pingpai:'华为',
    color:'red',
    getInt:function(price=4999){
        return this.pingpai+this.color+ (this.price!==undefined?this.price:price);
    }
 };

console.log( phone.getInt());

