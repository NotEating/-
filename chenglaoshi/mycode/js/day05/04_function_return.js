/**
 * （7）创建函数，传递两个参数，返回任意两个数字的最大值
 */

 function getMax(num_a,num_b)
 {
     return num_a>=num_b ?num_a:num_b;
 }
 console.log(getMax(2,4));


 /**
  * （8）创建函数，传递三个函数，返回任意三个数的最大值
  * 思路 找出两个数的最大值，然后再讲最大值与第三个比较
  */

  function getMax_thress(num_a,num_b,num_c){
    var zj=num_a>=num_b ?num_a:num_b;
    return zj>=num_c?zj:num_c;
  }
  console.log(getMax_thress(12,45,12));

  /**
   * （9）创建函数，传递1个参数，根据订单的状态码返回对应的中文状态
   * 1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其他-无法追踪
   */

   function getStatus(book)
   {
       switch(book){
           case 1:
               return '等待付款';
            case 2:
                return '等待发货';
            case 3:
                return '运输中';            
            case 4:
                return '已签收';
            case 5:
                return '已取消' ;
        default:
            return '无法追踪'       
        }
   }
   console.log(getStatus(1));

   /**
    * （10）创建函数，传递一个参数，要求查看任意一个年份是否为闰年，如果是闰年返回true，否则返回false 
    */

    function isRunYear(year)
    {
       if(isNaN(year)) {
           return;
       }
        return (year%4===0&&year%100!==0||year%400===0)?true:false;
    }

    console.log(isRunYear(2019));


    if(isRunYear(2019)){
        console.log(366);
    }
    else{
        console.log(365);
    }