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
      var name = req.body.result.parameters.name;
      switch (name) {
        case "Lakshmi":
          return res.json({
            "sequenceId": "",
            "text": `Hello ${name}, I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.`,
            "menu": [],
            "link": ""
          });
          break;
        case "Ralf":
          return res.json({
            "sequenceId": "",
            "text": `Hello ${name}, you completed 50% of web based training. So compete all the Web based training in order to generate report. Click on below link for WBT.`,
            "menu": [],
            "link": ""
          });
          break;
        case "Mathias":
          return res.json({
            "sequenceId": "",
            "text": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
            "menu": ["product realiability", "quick test"],
            "link": ""
          });
          break;
        case "Vivek":
          return res.json({
            "sequenceId": "",
            "text": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
            "menu": ["product realiability", "quick test"],
            "link": ""
          });
          break;
        default:
          return res.json({
            "sequenceId": "",
            "text": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
            "menu": ["product realiability", "quick test"],
            "link": ""
          });
      }
      break;
  }
});

server.listen((process.env.PORT || 8000), function () {
  console.log("Server is up and running...");
});