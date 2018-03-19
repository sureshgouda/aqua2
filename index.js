'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());



server.post("/echo", function (req, res) {
  var actions = req.body.result.action;
  switch (actions) {
    case "wbt":
      var speech =
        req.body.result &&
          req.body.result.parameters &&
          req.body.result.parameters.echoText
          ? req.body.result.parameters.echoText
          : "Seems like some problem. Speak again.";
      return res.json({
        speech: speech,
        displayText: speech,
        source: "echo"
      });
      break;
    case "report":
      break;
  }
});

server.listen((process.env.PORT || 8000), function () {
  console.log("Server is up and running...");
});