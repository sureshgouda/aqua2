'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());



server.post("/marcedes", function (req, res) {
  var actions = req.body.result.action;
  console.log(actions)
  switch (actions) {
    case "wbt":
      return res.json({
        "speech": "sdfg"
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