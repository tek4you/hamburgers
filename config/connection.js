var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) 
  {
      console.log("there was a DB issue", err);
  }
  console.log("connected as id " + connection.threadId);
//   connection.end();
});

module.exports = connection;
