const express=require('express');
const router=express.Router();
router.get('/xiaomi*',(req,res)=>{
   res.send('this is '+req.url); 
});
module.exports=router;