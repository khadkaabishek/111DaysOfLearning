const express = require("express");
const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;
// console.log(cluster.worker);
// console.log(cluster.isPrimary);

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  const PORT = 3000;
  app.get("/", (req, res) => {
    return res.json({ message: `Hey this is me, & id = ${process.pid} ` });
  });
  app.listen(PORT, () => {
    console.log(`Serve started at port ${PORT}`);
  });
}
