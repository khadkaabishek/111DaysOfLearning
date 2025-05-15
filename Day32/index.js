const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 4000;

app.use(express.static("./public"));

io.on("connection", (socket) => {   // creating conn first 
  console.log(`User connected: ${socket.id}`);

  socket.on("user-message", (data) => {  // taking messages from static docs 
    io.emit("message", data); // Broadcast to everyone
  });

  socket.on("disconnect", () => { // what if user disconnects 
    console.log(` User disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
