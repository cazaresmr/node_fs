const fs = require("fs");
const path = require("path");

function logRequest(method, url, statusCode) {
  const logFilePath = path.join(__dirname, "server.log");
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - Method: ${method}, URL: ${url}, Status: ${statusCode}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error logging request:", err);
    }
  });
}

module.exports = logRequest;
