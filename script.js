const fs = require('node:fs') //Imported the file system

console.log("Start of the script"); //Start

// // [sync] = Blocking Operations
// const contents = fs.readFileSync(`notes.txt`, `UTF-8`); //We don't use blocking code
// //                                1min code size : 1GB

// console.log('contents \n', contents);


// [Async] = Non-Blocking Operations
fs.readFile(`notes.txt`, `UTF-8`, function (error, data) {
    if(error) console.log(error);
     else console.log(`content`, data);
});

console.log("End of the script");
// ... 100 Loc

