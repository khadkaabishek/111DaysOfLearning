const express = require("express");
const app = express();
const PORT = 9999;
const fs = require("fs");
const status = require("express-status-monitor");
const zlib = require("zlib");
app.use(status());

//zipping of files

fs.createReadStream("./100mb-examplefile-com.txt").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./sampleoutput.zip"))
);

app.get("/", (req, res) => {
  // without streaming
  fs.readFile("./100mb-examplefile-com.txt", (err, data) => {
    return res.end(data);
  });

  //with streaming
  // const stream = fs.createReadStream("./10mb-examplefile-com.txt", "utf-8");
  // stream.on("data", (chunk) => res.write(chunk));
  // stream.on("end", () => res.end());
});

//OR
// app.get("/with_streaming", (req, res) => {
//   const stream = fs.createReadStream("./100mb-examplefile-com.txt", "utf-8");

//   stream.on("error", (err) => {
//     res.statusCode = 500;
//     res.end("File read error: " + err.message);
//   });

//   stream.pipe(res);
// });

app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
