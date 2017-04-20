


const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

// Prints: 12345678
console.log(buf.readUInt32BE(0).toString(16));

// Prints: 78563412
console.log(buf.readUInt32LE(0).toString(16));

// Throws an exception: RangeError: Index out of range
console.log(buf.readUInt32LE(1).toString(16));


