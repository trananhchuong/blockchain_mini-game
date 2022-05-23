const student = require("../models/student");

module.exports = function (app) {
  app.post("/register", (req, res) => {
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
    res.render("layout");
  });
};
