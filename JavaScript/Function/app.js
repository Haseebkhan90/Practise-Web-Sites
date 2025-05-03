
// Function //


function sums(a, b) {
    return(a + b)

}

sums(5, 10);

function sub(a, b) {
    return(a - b)
}
sub(5, 10);

function multiply(a, b) {
    return(a * b)
}
multiply(5, 10);
function divide(a, b) {
    return(a / b)
}
divide(5, 10);

function calculator(a, opt, c) {
    if (opt === '+') {
       return sums(a,c)
    }
    else if (opt === '-') {
        return sub(a,c)
    }
    else if (opt === '*') {
        return  multiply(a,c)
    }
    else if (opt === '/') {
        return divide(a,c)
    }
}
console.log(calculator(20 , "*" , 5));


