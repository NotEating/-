const express =require('express');
var router=express.Router();
router.get('/list',(req,res)=>{
    res.send('this is user router');
});
module.exports=router;