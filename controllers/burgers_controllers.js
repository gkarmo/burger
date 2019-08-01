var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
  });


module.exports = router;