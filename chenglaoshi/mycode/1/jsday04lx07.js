for(var i=9;i>=1;i--)
{
    for(var j=1,sum='';j<=i;j++)
    {
        sum+=i+'*'+( -(j+1-i))+'='+i*(9-j)+'\t';
    }
    console.log(sum);
}