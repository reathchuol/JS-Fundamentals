function Factorial(n) {
    if(isNaN(n) || n === 0) {
        return 1;
    }
    return n*Factorial(n-1);
}

const number = parseInt(process.argv[2], 10);
console.log(Factorial(number));