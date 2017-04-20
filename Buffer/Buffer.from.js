

// Creates a new Buffer containing UTF-8 bytes of the string 'buffer'
//const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);


const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// Shares memory with `arr`
const buf = Buffer.from(arr.buffer);

// Prints: <Buffer 88 13 a0 0f>
console.log(buf);

// Changing the original Uint16Array changes the Buffer also
arr[1] = 6000;

// Prints: <Buffer 88 13 70 17>
console.log(buf);


const ab = new ArrayBuffer(10);
const bufbuf = Buffer.from(ab, 0, 2);

// Prints: 2
console.log(bufbuf.length);



const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61;

// Prints: auffer
console.log(buf1.toString());

// Prints: buffer
console.log(buf2.toString());


//---------------------------------
// Buffer.from(string[, encoding])

const buf3 = Buffer.from('this is a tést');

// Prints: this is a tést'
console.log(buf3.toString());

// Prints: this is a tC)st 
console.log(buf3.toString('ascii'));


const buf4 = Buffer.from('7468697320697320612074c3a97374', 'hex');

// Prints: this is a tést
console.log(buf4.toString());









