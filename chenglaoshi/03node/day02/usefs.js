const fs=require('fs');
fs.stat('./yc',function(error,status){
    if(error){
        throw '错误';
    }
    console.log(status);
    status.isDirectory();
    status.isFile();
})
