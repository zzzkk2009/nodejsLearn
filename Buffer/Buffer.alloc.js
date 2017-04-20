
const buf = Buffer.alloc(5);

// Prints: <Buffer 00 00 00 00 00>
console.log('buf====', buf);


const buf1 = Buffer.alloc(5, 'a');

// Prints: <Buffer 61 61 61 61 61>
console.log('buf1===', buf1);


const buf2 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log('buf2====', buf2);




