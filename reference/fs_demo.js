// File System

const fs = require("fs");
const path = require("path");

// Create a folder in our system
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created successfully..");
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello, World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File created successfully & written to it!");

//     // Append file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love NodeJS!",
//       (err) => {
//         if (err) throw err;
//         console.log("File append successfully!");
//       }
//     );
//   }
// );

// Read File
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "renamed.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed..");
  }
);
