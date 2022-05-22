module.exports = function (app) {
  app.get("/hello", (req, res) => {
    res.send("hello world 456");
  });

  app.get("/", (req, res) => {
    res.send("hello world");
  });
};
