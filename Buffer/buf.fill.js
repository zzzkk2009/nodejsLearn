
// buf.fill(value, [,offset[, end]][,encoding])

const b = Buffer.allocUnsafe(50).fill('h');

// Prints: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
console.log(b.toString());


// Prints: <Buffer c8 a2 c8>
console.log(Buffer.allocUnsafe(3).fill('\u0222'));





