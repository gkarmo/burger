// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "r1d78kvuxokzob9c",
  password: "zj4rxggqkkyyflhb",
  database: "it4lhv9utideicqd"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
