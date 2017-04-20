

//buf.length

const buf = Buffer.alloc(1234);

// Prints: 1234
console.log(buf.length);

buf.write('some string', 0, 'ascii');

// Prints: 1234
console.log(buf.length);





let buf1 = Buffer.allocUnsafe(10);

buf1.write('abcdefghj', 0, 'ascii');

// Prints: 10
console.log(buf1.length);

buf1 = buf1.slice(0, 5);

// Prints: 5
console.log(buf1.length);
