var person1={
  name:'凯特',
  say:function(){
	//this 指向当前的对象
    console.log('我叫'+this.name);
  }
};
//调用对象中的方法
person1.say();