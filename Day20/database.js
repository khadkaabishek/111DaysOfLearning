const mysql = require("mysql");
connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
  fetchData();
  insertData();
});
function fetchData() {
  const query = "SELECT * FROM My_Name";
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error("Error fetching data: ", err.message);
      return;
    }
    console.log("Data from My_Name:", results);
  });
}
function insertData() {
  const insertQuery = "INSERT INTO My_Name VALUES (?, ?)";
  const values = ["Rocky", "Carlee"];

  connection.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
}
