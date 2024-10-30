// import { mkdir } from 'node:fs';

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
const fs = require("fs");

// fs.mkdirSync("cats");
// console.log("hii buddy");

const folder = process.argv[2] || "project"
fs.mkdriSync(folder);

// console.log(fs);


// fs.mkdir("dogs", { recursive: true }, (err) => {
//     console.log("in the callback")
//   if (err) throw err;
// }); 
// console.log("i come after mkd");
