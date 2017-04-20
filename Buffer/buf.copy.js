

//buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
//--------------------------------------------------------------
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for(let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'
  buf1[i] = i + 97;
}

buf1.copy(buf2, 8, 16, 20);

// Prints: !!!!!!!!qrst!!!!!!!!!!!!!
console.log(buf2.toString('ascii', 0, 25));



const buf3 = Buffer.allocUnsafe(26);

for(let i = 0; i < 26; i++){
  // 97 is the decimal ASCII value for 'a'
  buf3[i] = i + 97;
}

buf3.copy(buf3, 0, 4, 10);

// Prints: efghijghijklmnopqrstuvwxyz
console.log(buf3.toString());




