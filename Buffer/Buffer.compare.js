
const bufa1 = Buffer.from('1234');
const bufa2 = Buffer.from('0123');
const arr = [bufa1, bufa2];

// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// (This result is equal to: [buf2, buf1])
//console.log(arr.sort(Buffer.compare));

//is equivalent
console.log(arr.sort( (a, b)=>a.compare(b) ));


//buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
/*
0 is returned if target is the same as buf
1 is returned if target should come before buf when sorted.
-1 is returned if target should come after buf when sorted.
*/

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

// Prints: 0
console.log(buf1.compare(buf1));

// Prints: -1
console.log(buf1.compare(buf2));

// Prints: -1
console.log(buf1.compare(buf3));

// Prints: 1
console.log(buf2.compare(buf1));

// Prints: 1
console.log(buf2.compare(buf3));

// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2])
console.log([buf1, buf2, buf3].sort(Buffer.compare));

//targetStart, targetEnd, sourceStart, and sourceEnd
const bufa = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const bufb = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

// Prints: 0
console.log(bufa.compare(bufb, 5, 9, 0, 4));

// Prints: -1
console.log(bufa.compare(bufb, 0, 6, 4));

// Prints: 1
console.log(bufa.compare(bufb, 5, 6, 5));


