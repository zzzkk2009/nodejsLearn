

//buf.readFloatBE(offset[, noAssert])
//buf.readFloatLE(offset[, noAssert])

const buf = Buffer.from([1, 2, 3, 4]);

// Prints: 2.387939260590663e-38
console.log(buf.readFloatBE());

// Prints: 1.539989614439558e-36
console.log(buf.readFloatLE());

// Throws an exception: RangeError: Index out of range
console.log(buf.readFloatLE(1));

// Warning: reads passed end of buffer!
// This will result in a segmentation fault! Don't do this!
console.log(buf.readFloatLE(1, true));



