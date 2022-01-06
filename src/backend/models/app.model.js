// https://www.bezkoder.com/node-js-rest-api-express-mysql/

const sql = require("./database.js");


// TODO: Change everything to match assignment requirements
// constructor
const Task = function(task) {
  this.uuid = task.uuid;
  this.description = task.description;
  this.subject = task.subject;
  this.date = task.date;
  this.time = task.time;
  this.rankedTime = task.rankedTime;
  this.done = task.done;
  this.duration = task.duration;
  this.id = task.id;
  this.repetition = task.repetition;
  this.endDate = task.endDate;
};

Task.createQuick = (newQuickTask, result) => {
  sql.query(
    "INSERT INTO tasks SET ?", newQuickTask, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

    console.log("created tutorial: ", { id: res.insertId, newQuickTask });
    result(null, { id: res.insertId, newQuickTask });
  });
};

// Task.createReoccuring = (newTutorial, result) => {
//   sql.query("INSERT INTO tasks SET ?", newTutorial, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
//     result(null, { id: res.insertId, ...newTutorial });
//   });
// };

// Task.findById = (id, result) => {
//   sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found tutorial: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Tutorial with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// Task.getAll = (title, result) => {
//   let query = "SELECT * FROM tutorials";

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };

// Task.getAllPublished = result => {
//   sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };

// Task.updateById = (id, tutorial, result) => {
//   sql.query(
//     "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
//     [tutorial.title, tutorial.description, tutorial.published, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated tutorial: ", { id: id, ...tutorial });
//       result(null, { id: id, ...tutorial });
//     }
//   );
// };

// Task.remove = (id, result) => {
//   sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Tutorial with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted tutorial with id: ", id);
//     result(null, res);
//   });
// };

// Task.removeAll = result => {
//   sql.query("DELETE FROM tutorials", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} tutorials`);
//     result(null, res);
//   });
// };

module.exports = Task;