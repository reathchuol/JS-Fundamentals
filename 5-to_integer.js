const Arg = process.argv[2];

const number = parseInt(Arg, 10);

if (isNaN(number)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${number}`);
}