const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NODEJS",
  multipleStatements: true,
});
connection.connect((err) => {
  if (err) {
    console.error(`Error :${err}`);
  } else {
    console.log("Connected");
  }
});
module.exports = connection;
