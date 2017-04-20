
//buf.equals(otherBuffer)

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD');

// Prints: true
console.log(buf1.equals(buf2));

// Prints: false
console.log(buf1.equals(buf3));




