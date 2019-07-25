function sumJC(num){
    for(var i=1,j=1,sum=0;i<=num;i++)
    {
        j*=i;
        sum+=j;
    }
    return sum;
}
console.log(sumJC(3));