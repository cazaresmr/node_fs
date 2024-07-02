const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});
