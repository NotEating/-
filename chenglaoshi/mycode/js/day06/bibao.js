function fn(a,fb)
{
    fb();

    var b=function(){
        console.log(2);
    }
    return b;

}


console.log(fn(1,function(){
    console.log(123);
}));