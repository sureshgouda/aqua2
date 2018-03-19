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
      var name = req.body.result.parameters.name;
      switch (name) {
        case "Lakshmi":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": `Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. I can see that you are new user If you are a new user please register yourself for the training first by clicking on the link`,
                  "menu": [],
                  "link": ""
                }
              }]
          });
          break;
        case "Ralf":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": `Welcome ${name} to WBT. you completed 50% of web based training. So compete all the Web based training in order to generate report. Click on below link for WBT.`,
                  "menu": [],
                  "link": ""
                }
              }]

          });
          break;
        case "Mathias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": ` Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. Below is the list of training offered by AQUA.`,
                  "menu": ["training document", "life training document"],
                  "link": ""
                }
              }]
          });
          break;
        case "Vivek":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": ` Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. Below is the list of training offered by AQUA.`,
                  "menu": ["training document", "life training document"],
                  "link": ""
                }
              }]
          });
          break;
      }
      break;
    case "report":
      var name = req.body.result.parameters.name;
      switch (name) {
        case "Lakshmi":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": `Hello ${name}, I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.`,
                  "menu": [],
                  "link": ""
                }
              }]
          });
          break;
        case "Ralf":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": `Hello ${name}, you completed 50% of web based training. So compete all the Web based training in order to generate report. Click on below link for WBT.`,
                  "menu": [],
                  "link": ""
                }

              }]

          });
          break;
        case "Mathias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
                  "menu": ["product realiability", "quick test"],
                  "link": ""
                }
              }]

          });
          break;
        case "Vivek":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload":{
                  "sequenceId": "",
                  "text": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
                  "menu": ["product realiability", "quick test"],
                  "link": ""
                }
              }]
          });
          break;

      }
      break;
    case "wbtdetail":
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload":{
                "sequenceId": "",
                "text": `Opens the PDF link for the document. `,
                "menu": [],
                "link": ""
              }
            }]
        });
      } else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload":{
                "sequenceId": "",
                "text": `Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. I can see that you are new user If you are a new user please register yourself for the training first by clicking on the link`,
                "menu": [],
                "link": "" 
              } 
            }]
        });
      }
      break;
  }
});

server.listen((process.env.PORT || 8000), function () {
  console.log("Server is up and running...");
});