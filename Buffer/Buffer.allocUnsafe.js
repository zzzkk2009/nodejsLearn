const buf = Buffer.allocUnsafe(10);

// Prints:(contents may vary):  <Buffer 00 c2 03 04 01 00 00 00 00 00>
console.log('buf===', buf);


buf.fill(0);

// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log('buf======', buf);





