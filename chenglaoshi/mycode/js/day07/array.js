/**
 * （1）创建数组，包含有多个城市名称；创建数组，包含有多个笔记本品牌。
 */

 var array01=['北京','上海','成都',['话说','666']];
 var duixiang={0:'123',1:'456',2:'789'};

 array01['1']='yc';
 
 for( var key in array01){
    console.log(key);
}

/**
 * （4）创建一个空数组，使用数组长度添加若干个国家名称
 */
var gj=[];
gj[gj.length]='中国';
gj[gj.length]='美国';

for( var key in gj){
    console.log(gj[key]);
}

console.log(duixiang);

/**
 * （5）创建数组，包含有多个用户数据（编号，用户名，密码，手机，邮箱）
 */

var user=[ {no:'1',name:'yc',pwd:'123',phone:'13036592217',yx:'315@'},{no:'1',name:'yc',pwd:'123',phone:'13036592217',yx:'315@'}  ];
console.log(user);


/**
 * （6）创建一个对象，包含姓名，性别，爱好（音乐，旅游，游戏，敲代码）
 */

var instrance={
    name:'yc',
    sex:'男',
    like:['音乐','旅游','游戏','敲代码']
};
console.log(instrance);