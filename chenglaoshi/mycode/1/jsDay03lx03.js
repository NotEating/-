// var age=17;
// (age>=18 && console.log('成年人') ) || console.log('未成年');

/**
 * 0 -0 NaN undefined' null false '空字符串' 
 */
//第一种 if(name==='')
    // let name=''
    // if(!name)
    // {
    //     name='这个人很懒，什么都没留下';
    // }
    // console.log(name);

    // var age='18a';
    // if(isNaN(age))
    // {
    //     console.log(age);
    // }


    /**
     * 练习 ：要求使用 弹出提示框 分别输入商品的价格和数量
     *      如果总价满500打九折，声明变量保存卡内余额，如果足以支付，弹出警示框 pay sucess,否则弹出警示框 
     *      pay error 
     * 
     */

  /*    var price=prompt('请输入商品的价格');
     var count=prompt('请输入数量');
     var ye=Number(prompt('请输入余额'));
     var zj=Number(price)*Number(count); //*具有隐式转换
     if(zj>=500)
     {
         zj*=0.9;
     }
     if(ye>=zj)
     {
         alert('pay sucess 余额为'+(ye-zj));
     }
     else
     {
        alert('pay error 余额不足');
     }
 */

/*     var type='党员'
    if(type==='党员') {
        console.log('这个人是党员')

    }
    else if(type==='团员')
    {
        console.log('团员');
    }
    else
    {
        console.log('你的人');
    } */

    /**
     * 练习 ：声明变量保存订单的状态码，根据状态打印对应的汉子内容
     *   1 等待付款
     *  2等待发货
     * 3运输中
     * 4已签收
     * 5已取消
     * 其他 无法追踪
     */
/* 
     var status=prompt("intput num");
     if(Number(status)===1)
     {
         document.write('等待付款');
     }
     else if(Number(status)===2) {
        document.write('3运输中');
     }
     else if(Number(status)===3) {
        document.write('4已签收');
     }
     else if(Number(status)===4) {
        document.write('5已取消');
     }
     else
     {
        document.write('无法追踪');
     } */

     /**
      * 练习 ：
      *     
      * 
      */
 /*     var scroe=61;
     if(scroe>=90)
     {
        document.write('优秀');
     }
     else if(scroe>=80)
     {
        document.write('良好');
     }
     else if(scroe>=70)
     {
        document.write('中等');
     }
     else if(scroe>=60)
     {
        document.write('及格');
     }
     else
     {
        document.write('不及格');
     } */

     /**
      * 练习 
      * 普通客户 0-10
      * 优质客户 10·100以下
      * 金牌客户 100 ·500以下
      * 砖石客户 500·
      */
    /*  var al;
      if(al<10)
      {
          document.write('普通客户');
      }
      else if(al<=100)
      {
        document.write('优质客户');
      }
      else if(al<=500)
      {
        document.write('金牌客户');
      }  
      else
      {
          document.write('砖石客户');
      }
        

       */


     /* 
      */



/*       switch(status)
      {
          case 1:
              console.log(1);
              break;
            case 2:
                console.log(2);
                break;
      } */

      while(i){
          var i=1;
          console.log(i);
          i++;
          if(i==10000)
          {
              i=0;
          }

      }