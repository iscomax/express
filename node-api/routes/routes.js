var faker = require("faker");

var UserController = require("../controllers/users");
var TaskController = require("../controllers/task");

var appRouter = function (app) {

  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/users", function (req, res, next) {
    UserController.getUsers(req, res, next);
    });
    
    
    
  app.get("/tasks", function (req, res, next) {
    TaskController.getTasks(req, res, next);
    });
  };
  

module.exports = appRouter;





