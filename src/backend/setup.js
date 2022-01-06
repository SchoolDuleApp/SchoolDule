// Run this file to connect to the database and create the database

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

    // Create Database
    con.query(
        "CREATE DATABASE IF NOT EXISTS tasks", 
                
    function (err, result) {
        if (err) throw err;
        console.log("tasks database created.");
    });

    // Select newly created Database
    con.query(
        "USE tasks", 
                
    function (err, result) {
        if (err) throw err;
        console.log("Database selected");
    });

    con.query(
        'CREATE TABLE IF NOT EXISTS `userdata2` (' +
        'uuid varchar(255) NOT NULL PRIMARY KEY,' +
        'subject varchar(255), ' +
        'descripton text, ' +
        'date tinytext, ' +
        'time tinytext, ' +
        'rankedTime int(4), ' +
        'done boolean DEFAULT false, ' +
        'duration mediumint, ' +
        'id text, ' +
        'repetition tinytext,' +
        'endDate tinytext' +
        ') ENGINE=InnoDB DEFAULT CHARSET=utf8',
                
    function (err, result) {
        if (err) throw err;
        console.log("Database Initialized");
    });
});