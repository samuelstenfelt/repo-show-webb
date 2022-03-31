//alert("Working");

//mathematical operators

var currentVal = 0;

function sum()
{
    //while (true)
    {
        var b = parseInt(prompt());
        var result = currentVal + b;
        currentVal = result;
    }    
}

sum();
console.log(currentVal);