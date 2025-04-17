const express = require("express");
const app = express();
const port = 4000;

// get means  (reading) put means updating whole body and post uploading and patch means updating the single set
//CRUD  => CREATE, READ, UPDATE, DELETE => POST , GET , PUT/PATCH,  DELETE

app.get("/", (req, res) => {
  res.send("hello from homepage !");
});
app.get("/about", (req, res) => {
  res.send(`hello , ${req.query.name}`);
});

app.post("/", (req, res) => {
  //req -> data - > validate -> process - > store
  res.status(201).send("Got a POST request");
});

app.put("/", (req, res) => {
  res.send("Got a PUT request at /user");
});
app.patch("/", (req, res) => {
  // changing the new items only by cutting out the alrdy processed items
  res.send("Got a Patch request at /user");
});

app.delete("/user", (req, res) => {
  //("/tweets/:id",(req,res) =>{... })
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
