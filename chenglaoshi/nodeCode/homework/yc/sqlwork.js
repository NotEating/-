const mysql=require('mysql');
const con= mysql.createConnection({
    host:'localhost',
    password:'',
    user:'root',
    port:'3306',
    database:'ce'
});

function query(str,type){  
    con.query(str,(err,res)=>{
        if(err)
        throw err;
        if(type==='select'){
        console.log(...res);   
        }
   })
}
/**查询操作 */
var sql='select * from yctable';
var sql2='insert into yctable values(3,3)';
var sql3='delete from yctable where id=2';
var sql4='update yctable set name='+'yc'+'where id=12';
query(sql2);
query(sql3);
query(sql4);
query(sql,'select');
