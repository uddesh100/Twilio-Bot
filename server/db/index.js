var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "twilio_bot",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = con;