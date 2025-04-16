const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl.pathname);
  const log = `${Date.now()}, ${req.url},New request accepted \n`;
  fs.appendFile("log.txt", log, "utf-8", () => {
    switch (myUrl.pathname) {
      case "/":
        res.end("This is homepage ");
        break;
      case "/about":
        const username = myUrl.query.name;
        console.log(username);
        res.end("Hey " + username);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for " + search);
      default:
        res.end("404 Not Found");
        break;
    }
  });
});
let port = 8000;
myServer.listen(port, () => {
  console.log(`Server started : ${port}`);
});
