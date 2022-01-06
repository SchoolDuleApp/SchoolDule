// https://www.bezkoder.com/node-js-rest-api-express-mysql/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "beans"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    con.query("USE tasks", function (err, result) {
        if (err) throw err;
        console.log("Database selected");
  });

    con.query("DROP TABLE userdata", function (err, result) {
      if (err) throw err;
      console.log("Table userdata dropped.");
  });

  con.query("DROP TABLE userdata2", function (err, result) {
    if (err) throw err;
    console.log("Table userdata2 dropped");
  });

});