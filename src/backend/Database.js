// https://www.bezkoder.com/node-js-rest-api-express-mysql/

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",

  // Change creds to what you have set up
  user: "root",
  password: "beans"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(
        "USE beans", 
                
    function (err, result) {
        if (err) throw err;
        console.log("Databases edited");
    });
    
    // con.query(
    //     "CREATE TABLE test (info1 text, qnty decimal)", 
                
    // function (err, result) {
    //     if (err) throw err;
    //     console.log("Databases edited");
    // });

    // con.query(
    //     "INSERT INTO test (info1, qnty) VALUES ('W-Ratio', 9999.9999)", 
                
    // function (err, result) {
    //     if (err) throw err;
    //     console.log("Databases edited");
    // });

    con.query(
        "SELECT info1, qnty FROM test", 
                
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SHOW DATABASES", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});