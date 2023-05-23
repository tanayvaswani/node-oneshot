// File System

const fs = require("fs");
const path = require("path");

// Create a folder in our system
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created successfully..");
// });

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello, World!",
  (err) => {
    if (err) throw err;
    console.log("File created successfully & written to it!");
  }
);
