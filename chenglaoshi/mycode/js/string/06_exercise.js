var a='word sfwFGDSGS ';

while(true){
   var f=prompt('请输入验证码'+a);
   if(
   a.toLowerCase()==f.toLowerCase()||a.toUpperCase()==f.toUpperCase()
   ){
       break;
   }
   document.write(f);

}