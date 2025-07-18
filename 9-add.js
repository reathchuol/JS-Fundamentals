//Defining the function
function add (a, b) {
    return a + b;
}

//Defining the numbers
const firstNumber = parseInt(process.argv[2], 10);
const SecondNumber = parseInt(process.argv[3], 10);

//printing the result
console.log(add(firstNumber, SecondNumber));