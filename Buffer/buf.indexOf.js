

//buf.indexOf(value[, byteOffset][, encoding])

const buf = Buffer.from('this is a buffer');

// Prints: 0
console.log(buf.indexOf('this'));

// Prints: 2
console.log(buf.indexOf('is'));

// Prints: 8
console.log(buf.indexOf(Buffer.from('a buffer')));

// Prints: 8
// (97 is the decimal ASCII value for 'a')
console.log(buf.indexOf(97));

// Prints: -1
console.log(buf.indexOf(Buffer.from('a buffer example')));

// Prints: 8
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8)));


const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');

// Prints: 4
console.log(utf16Buffer.indexOf('\u03a3', 0, 'ucs2'));

// Prints: 6
console.log(utf16Buffer.indexOf('\u03a3', -4, 'ucs2'));






const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte
// Prints: 2, equivalent to searching for 99 or 'c'
console.log(b.indexOf(99.9));
console.log(b.indexOf(256 + 99));

// Passing a byteOffset that coerces to NaN or 0
// Prints: 1, searching the whole buffer
console.log(b.indexOf('b', undefined));
console.log(b.indexOf('b', {}));
console.log(b.indexOf('b', null));
console.log(b.indexOf('b', []));



