


const buf = Buffer.from([0, 0, 0, 5]);

// Prints: 5
console.log(buf.readInt32BE());

// Prints: 83886080
console.log(buf.readInt32LE());

// Throws an exception: RangeError: Index out of range
console.log(buf.readInt32LE(1));


