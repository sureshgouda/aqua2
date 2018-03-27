'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());

var vivekReport = [];
var matahisReport = [];

server.post("/marcedes", function (req, res) {
  var actions = req.body.result.action;
  console.log(actions)
  switch (actions) {
    case "welcome":
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        if (name == "Mathias" && matahisReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": "Last time you generated the report for D2A – Quick Test Duration and D1B2 – Top control Unit fault. Should I generate it again? Tell me YES/NO",
                  "menu": [ ]
                }
              }]
          });
        } else if (vivekReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": "Last time you generated the report for D2A – Quick Test Duration and D1B2 – Top control Unit fault. Should I generate it again? Tell me YES/NO",
                  "menu": [ ]
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
                  "content": "<strong>Hi, I'm Lisa,</strong> and I'm here to assist you . Please choose one of the following topic.",
                  "menu": [
                    {
                      "image": "",
                      "title": "AQUA",
                      "description": "Advanced Quality Analysis"
                    },
                    {
                      "image": "",
                      "title": "WBT",
                      "description": "Web based Training"
                    },
                    {
                      "image": "",
                      "title": "REPORT",
                      "description": "Aqua Reports"
                    },
                    {
                      "image": "",
                      "title": "SUPPORT",
                      "description": "Find Solution"
                    }
                  ]
                }
              }]
          });
        }
      } else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": "<strong>Hi, I'm Lisa,</strong> and I'm here to assist you . Please choose one of the following topic.",
                "menu": [
                  {
                    "image": "",
                    "title": "AQUA",
                    "description": "Advanced Quality Analysis"
                  },
                  {
                    "image": "",
                    "title": "WBT",
                    "description": "Web based Training"
                  },
                  {
                    "image": "",
                    "title": "REPORT",
                    "description": "Aqua Reports"
                  },
                  {
                    "image": "",
                    "title": "SUPPORT",
                    "description": "Find Solution"
                  }
                ]
              }
            }]
        });
      }
      break;
    case 'generated-report':
      var name = req.body.result.parameters.name;
      if (name == "Mathias") {
        return res.json({
          "messages": matahisReport
        });
      } else {
        return res.json({
          "messages": vivekReport
        });
      }
      break;
    case "mainmenu":
      return res.json({
        "messages": [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "",
              "content": "Please choose one of the following topic.",
              "menu": [
                {
                  "image": "",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis"
                },
                {
                  "image": "",
                  "title": "WBT",
                  "description": "Web based Training"
                },
                {
                  "image": "",
                  "title": "REPORT",
                  "description": "Aqua Reports"
                },
                {
                  "image": "",
                  "title": "SUPPORT",
                  "description": "Find Solution"
                }
              ]
            }
          }]

      });
      break
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
                  "content": `<p> Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. Below is the list of training offered by AQUA.</p><p>I can see that you are new user If you are a new user please register yourself for the training first by clicking on the link</p><a href=''>Registration form for web based training</a>`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": []
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
                  "content": `${name} was found to have completed the WBT in a partial manner.  In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. Below is the list of training offered by AQUA.`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[
                    {
                      "name":"training document",
                      "link":"training document"
                    },
                    {
                      "name":"life training document",
                      "link":"life training document"
                    }
                  ]
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
                  "content": `${name} was found to have completed the WBT. now you can access reports.`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[]
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
                  "content": `${name} was found to have completed the WBT. now you can access reports.`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[]
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
                  "content": `<p>I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.</p><a href=''>Registration form for web based training</a>`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": []
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
                  "content": `${name} was found to have completed the WBT in a partial manner.Let’s continue from where we left off`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[
                    {
                      "name":"training document",
                      "link":"training document"
                    },
                    {
                      "name":"life training document",
                      "link":"life training document"
                    }
                  ]
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
                  "content": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[],
                  "report":[
                    {
                      "name":"product realiability",
                      "link":"product realiability"
                    },
                    {
                      "name":"quick test",
                      "link":"quick test"
                    }
                  ]
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
                  "content": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[],
                  "report":[
                    {
                      "name":"product realiability",
                      "link":"product realiability"
                    },
                    {
                      "name":"quick test",
                      "link":"quick test"
                    }
                  ]
                }
              }]
          });
          break;

      }
      break;

    case "training-info":
      var name = req.body.result.parameters.name;
      if (name != "Mathias" || name != "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": `Opens the PDF link for the document.`,
                "menu": [],
                "news": [],
                "events": [],
                "support": [],
                "wbt":[],
                "report":[],
                "link": "assets/TIPS-AQUA-Anwendertag-EN.pdf",
                "linkTitle": "download pdf"
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
                  "content": `AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.`,
                  "menu": [],
                  "news": [],
                  "events": [],
                  "support": [],
                  "wbt":[],
                  "report":[
                    {
                      "name":"quality reports",
                      "link":"quality reports"
                    },
                    {
                      "name":"hit lists",
                      "link":"hit lists"
                    },
                    {
                      "name":    "distributions",
                      "link":    "distributions"
                    },
                    {
                      "name":"production reports",
                      "link":"production reports"
                    },  {
                      "name":"audit reports",
                      "link":"audit reports"
                    },
                    {
                      "name":"special reports",
                      "link":"special reports"
                    },
                    {
                      "name":"early warning system",
                      "link":"early warning system"
                    },
                    {
                      "name":"extrapolation",
                      "link":"extrapolation"
                    },
                    {
                      "name":"other reports",
                      "link":"other reports"
                    }
                  ]
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
                "content": `I can see you didn't complete wbt training.`,
                "menu": [],
                "news": [],
                "events": [],
                "support": [],
                "wbt":[],
                "report":[]  
              }
            }]
        });
      }
      break;
    case 'report-category-detail':
      var name = req.body.result.parameters.name;
      if (name == "Mathias") {
        var report = [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "",
                "content": `Opens the PDF link for the document.`,
                "menu": [],
                "news": [],
                "events": [],
                "support": [],
                "wbt":[],
                "report":[],
                "link": "assets/TIPS-AQUA-Anwendertag-EN.pdf",
                "linkTitle": "download pdf"
            }
          }];
        matahisReport = report;
        return res.json({
          "messages": report
        });
      } else if (name == "Vivek") {
        var report = [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "",
              "content": `Opens the PDF link for the document.`,
              "menu": [],
              "news": [],
              "events": [],
              "support": [],
              "wbt":[],
              "report":[],
              "link": "assets/TIPS-AQUA-Anwendertag-EN.pdf",
              "linkTitle": "download pdf"
            }
          }];
        vivekReport = report;
        return res.json({
          "messages": report
        });
      }
      else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": `I can see you didn't complete wbt training.`,
                "menu": [],
                "news": [],
                "events": [],
                "support": [],
                "wbt":[],
                "report":[]       
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