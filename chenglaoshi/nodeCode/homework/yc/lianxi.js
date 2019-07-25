const express=require('express');
const server=express();
const bodyparser=require('body-parser');
server.listen(80,function(){
    console.log('server is running');
});
server.use(express.static('./public'));
server.use(bodyparser.urlencoded({
    extended:false
}));
server.post('/mylogin',(req,res)=>{
    res.send(req.[body]);
    // req.on('data',(data)=>{
    //     console.log(data.toString());
    //     res.send('ok');
    // });

});