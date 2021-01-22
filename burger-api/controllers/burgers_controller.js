const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// create all routes and set up logic within routes

router.get("/api/burgers", function(request, response) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      response.json({ id: hbsObject });
      // response.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(request, response) {
    console.log("===>", request.body);
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      request.body.burger_name, request.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      response.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(request, response) {
    let condition = "id = " + request.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: request.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });


// exporting router

module.exports = router;