const Size = parseInt(process.argv[2], 10);

if (isNaN(Size)) {
    console.log("Missing size");
} else if (Size > 0) {
    const row = "x".repeat(Size);
    for (let s = 0; s < Size; s++) {
        console.log(row);
    }
}