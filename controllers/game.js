const student = require("../models/student");

module.exports = function (app) {
  app.post("/register", (req, res) => {
    console.log("🚀 ~ file: game.js ~ line 5 ~ app.post ~ req", req.body);
    if (!req.body.name || !req.body.email || !req.body.phone) {
      res.json({
        success: false,
        error: "Please fill all fields",
      });
    } else {
      const newStudent = new student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        wallet: null,
        dateTime: Date.now(),
        paid: false,
      });

      newStudent.save((err) => {
        if (err) {
          res.json({
            success: false,
            error: err,
          });
        } else {
          res.json({
            success: true,
            dataResponse: newStudent,
          });
        }
      });
    }
  });

  app.get("/", (req, res) => {
    const studentFind = new student({
      name: "Teo",
      email: "teoninolxag@gmail.com",
      phone: "0397997439",
      wallet: "adasdasdsada",
      dateTime: Date.now(),
    });
    res.send(studentFind);
  });
};
