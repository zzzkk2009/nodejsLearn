

//buf.includes(value[, byteOffset][, encoding])


const buf = Buffer.from('this is a buffer');

// Prints: true
console.log(buf.includes('this'));

// Prints: true
console.log(buf.includes('is'));

// Prints: true
console.log(buf.includes(Buffer.from('a buffer')));

// Prints: true
// (97 is the decimal ASCII value for 'a')
console.log(buf.includes(97));

// Prints: false
console.log(buf.includes(Buffer.from('a buffer example')));

// Prints: true
console.log(buf.includes(Buffer.from('a buffer example').slice(0, 8)));

// Prints: false
console.log(buf.includes('this', 4));


