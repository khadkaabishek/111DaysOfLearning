const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res) {
  if (req.url === "/favicon.ico") return;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl.pathname);
  const log = `${Date.now()}, ${req.method},${req.url},New request accepted \n`;
  fs.appendFile("log.txt", log, "utf-8", () => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") {
          res.end("This is homepage ");
          break;
        }
      case "/about":
        const username = myUrl.query.name;
        console.log(username);
        res.end("Hey " + username);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for " + search);
      case "/signup":
        if (req.method === "GET") {
          res.end("This is signup form ");
          break;
        } else if (req.method === "POST") {
          //DB query
          req.end("SignUp success");
        }
      default:
        res.end("404 Not Found");
        break;
    }
  });
}
const myServer = http.createServer(myHandler);

let port = 8000;
myServer.listen(port, () => {
  console.log(`Server started : ${port}`);
});
