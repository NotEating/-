/**
 * 和circle.js(功能模块)；在功能模块下创建两个函数，分别传递1个参数，
 * 计算圆的面积和周长，导出这两个函数；在主模块中引入功能模块，并调用两个函数。
 */
function mj(r){
    return Math.floor(Math.PI*r*r);
}

function zc(r){
    return Math.floor(Math.PI*r*2);
}
module.exports.mjo=mj;
module.exports.zco=zc;