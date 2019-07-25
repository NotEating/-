var fs=require('fs');
var read=fs.createReadStream('./1.rar');
var write=fs.createWriteStream('2.rar');
read.pipe(write);
