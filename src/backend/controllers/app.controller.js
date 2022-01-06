// https://www.bezkoder.com/node-js-rest-api-express-mysql/

const Task = require("../models/app.model.js");

// Create and save a new quick task
exports.createQuick = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log("Beans");
  
    // // Create a Tutorial
    // const task = new Task({
    //   uuid: req.body.uuid,
    //   subject: req.body.subject,
    //   description: req.body.description,
    //   date: req.body.date,
    //   time: req.body.time,
    //   rankedTime: req.body.rankedTime,
    //   done: req.body.rankedTime || false,
    //   duration: req.body.rankedTime,
    //   id: req.body.id,
    //   repetition: false,
    //   endDate: req.body.endDate
    // });
  
    // // Save Tutorial in the database
    // Task.createQuick(task, (err, data) => {
    //   if (err)
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the Task."
    //     });
    //   else res.send(data);
    // });
  };

// // Retrieve all Tutorials from the database (with condition).
// exports.findAll = (req, res) => {
  
// };

// // Find a single Tutorial with a id
// exports.findOne = (req, res) => {
  
// };

// // find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };

// // Update a Tutorial identified by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };