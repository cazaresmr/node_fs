const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "HelloWorldCopy.txt");

fs.unlink(filePath, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File deleted successfully");
});
