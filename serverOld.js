const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.statusCode = 404;
        res.end(data);
      }
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
