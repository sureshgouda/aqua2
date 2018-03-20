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
                "payload": {
                  "sequenceId": "",
                  "text": `Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. I can see that you are new user If you are a new user please register yourself for the training first by clicking on the link`,
                  "menu": [],
                  "link": ""
                }
              }]
          });
          break;
        case "Rahul":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
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
                "payload": {
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
                "payload": {
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
                "payload": {
                  "sequenceId": "",
                  "text": `I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.`,
                  "menu": [],
                  "link": ""
                }
              }]
          });
          break;
        case "Rahul":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "text": `You completed 50% of web based training. So compete all the Web based training in order to generate report. Click on below link for WBT.`,
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
                "payload": {
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
                "payload": {
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

    case "training-info":
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
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
              "payload": {
                "sequenceId": "",
                "text": `Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. I can see that you are new user If you are a new user please register yourself for the training first by clicking on the link`,
                "menu": [],
                "link": ""
              }
            }]
        });
      }
      break;
    case 'report-category':
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "text": `Opens the PDF link for the document. `,
                "menu": [],
                "category": [
                  {
                    "name": "Quick test result, fault codes",
                    "report": [
                      {
                        "code": "D1A",
                        "description": "FC per category, distibuted based on model series"
                      },
                      {
                        "code": "D1B1",
                        "description": "FC per model series, distribruted based on ECU"
                      },
                      {
                        "code": "D1B2",
                        "description": "Top control unit faults"
                      },
                      {
                        "code": "D1C1",
                        "description": "FC per ECU-overview"
                      },
                      {
                        "code": "D1C2",
                        "description": "FC per ECU-overview(interactive)"
                      },
                      {
                        "code": "D1C3",
                        "description": "FC per ECU-overview with fault type and FC prompt"
                      },
                      {
                        "code": "D1D",
                        "description": "Faded pit fault codes"
                      },
                      {
                        "code": "D1E1",
                        "description": "FIN-based fault code history"
                      },
                      {
                        "code": "D1E2",
                        "description": "Fault code histor FIN-based with fault text"
                      },
                      {
                        "code": "D1F",
                        "description": "Quick test result"
                      },
                      {
                        "code": "D1G",
                        "description": "Fault codes of individual vehicle diagostics"
                      }
                    ]
                  },
                  {
                    "name": "Diagnosis and repair procedure",
                    "report": [
                      {
                        "code": "D2A",
                        "description": "Quick test duration"
                      },
                      {
                        "code": "D2B",
                        "description": "Diagonsis procedure"
                      },
                      {
                        "code": "D2C",
                        "description": "Fault freeze frame overview(FiN selection)"
                      },
                      {
                        "code": "D2D",
                        "description": "Fault freeze frame overview(control unit, FC selection)NEW"
                      }
                    ]
                  }
                ],
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
              "payload": {
                "sequenceId": "",
                "text": `I can see that you didn't completed web based training. So compete all the Web based training in order to generate report. Click on below link for WBT.`,
                "menu": [],
                "link": ""
              }
            }]
        });
      }
      break;
    case 'report-category-detail':
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "text": `Opens the PDF link for the report. `,
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
              "payload": {
                "sequenceId": "",
                "text": `I can see that you didn't completed web based training. So compete all the Web based training in order to generate report. Click on below link for WBT.`,
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