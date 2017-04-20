const buf = Buffer.from('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));

// Prints: hello world
console.log(buf.toString('ascii'));

// Prints: hello world 
console.log(buf.toString('utf8'));

// Prints: 敨汬<206f>潷汲
console.log(buf.toString('ucs2'));

// Prints: 敨汬⁯潷汲
console.log(buf.toString('utf16le'));

// Prints: hello world
console.log(buf.toString('binary'));

//Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));



