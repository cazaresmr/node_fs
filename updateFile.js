const fs = require("fs");

fs.appendFile("HelloWorld.txt", "\nSome text to append", (err) => {
  if (err) throw err;
  console.log("Text appended to file!");
});
