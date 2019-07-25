/**
 * （4）创建Date对象，保存员工的入职时间’2019/7/16‘,合同期为3年，计算到期时间，
 */


 var d1=new Date('2019/7/16');
 var d2=new Date(d1);
 d2.setFullYear(d2.getFullYear()+3);
 console.log(d1.toLocaleString(),d2.toLocaleString() )