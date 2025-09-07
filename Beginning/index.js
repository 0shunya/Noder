const fs = require('fs')

const read = fs.readFileSync(`notes.txt`, `utf-8`)

console.log(read);

// const write = fs.writeFileSync(`write.txt`, `read me \n ${read}`, `utf-8`)

// fs.appendFileSync(`write.txt`, `\n\n Appended`, `utf-8`)

fs.mkdirSync(`games`)