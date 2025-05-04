
const db = require("./connection");

const sql1 = `
  SELECT users.name, orders.product_name 
  FROM users 
  INNER JOIN orders ON users.id = orders.user_id
`;

db.query(sql1, (err1, results1) => {
  if (err1) throw err1;
  console.log("Inner Join - User Orders:");
  console.table(results1);

  const sql2 = `
    SELECT users.name, orders.product_name 
    FROM users 
    LEFT JOIN orders ON users.id = orders.user_id
  `;

  db.query(sql2, (err2, results2) => {
    if (err2) throw err2;
    console.log("Left Join - All Users and Orders:");
    console.table(results2);
  });
});
