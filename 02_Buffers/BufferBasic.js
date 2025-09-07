const { Buffer } = require("buffer")

// const buffer = Buffer.alloc(8);

// console.log(buffer);

// const buf = Buffer.from("Hello Chai");
// console.log(buf);
// console.log(buf.toString());


// const bufTwo = Buffer.allocUnsafe(110);
// console.log(bufTwo);

// const buf = Buffer.alloc(5);
// buf.write('Hello')
// console.log(buf.toString());

// const buf = Buffer.from("Shlok Singh");
// console.log(buf.toString());
// console.log(buf.toString('utf-8', 0, 5));

// const buf = Buffer.from("Shlok Singh");
// console.log(buf);
// buf[0] = 0x68;
// console.log(buf);
// console.log(buf.toString('utf-8', 0, 5));

const buf1 = Buffer.from("Shlok ");
const buf2 = Buffer.from("Singh");
const merged = Buffer.concat([buf1, buf2])
console.log(merged.toString('utf-8'));




