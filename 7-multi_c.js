const x = parseInt(process.argv[2]);

if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else if (x > 0) {
    for (let m = 0; m < x; m++) {
        console.log("C is fun");
    }
}