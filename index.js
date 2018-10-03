'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());

var NicoleReport = [];
var matahisReport = [];
var matahisReportType;
var NicoleReportType;

server.post("/marcedes", function (req, res) {
  var actions = req.body.result.action;

  var lang = req.body.lang;
if(lang == 'en')
{
  switch (actions) {
    case "welcome":
      var name = req.body.result.parameters.name;
      if (name == "Matthias" || name == "Nicole") {
        if (name == "Matthias" && matahisReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Hello ${name}, Last time you generated the report for ${matahisReportType}. Should I generate it again? YES or NO`
                }
              }]
          });
        } else if (NicoleReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Hello ${name}, Last time you generated the report for ${NicoleReportType}. Should I generate it again? YES or NO`
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
                "sequenceId": "003",
                "content": "Hi, Welcome to AQUA. I'm Lisa, I'm here to assist you. How may I help you?",
                 "emojis": {
    "emojiFlag": true,
    "happy": "That's awesome! What can I do for you?",
    "unwell": "Oh dang! These viruses I tell you. They affect me too. I can make things a little easier for you. Click on one of the options below ",
    "sleepy": "Rise and shine! I can give you a head start by fetching some reports. Or just pick an action for me to take. ",
    "sad": "Take a deep breath and then let’s begin"
                            }

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
                "sequenceId": "003",
                "content": "Hi, Welcome to AQUA. I'm Lisa, I'm here to assist you. How may I help you?",
                 "emojis": {
    "emojiFlag": true,
    "happy": "That's awesome! What can I do for you?",
    "unwell": "Oh dang! These viruses I tell you. They affect me too. I can make things a little easier for you. Click on one of the options below ",
    "sleepy": "Rise and shine! I can give you a head start by fetching some reports. Or just pick an action for me to take. ",
    "sad": "Take a deep breath and then let’s begin"
         }

              }
            }]
        });
      }
      break;
    case 'generated-report':
      var name = req.body.result.parameters.name;
      if (name == "Matthias") {
        return res.json({
          "messages": matahisReport
        });
      } else {
        return res.json({
          "messages": NicoleReport
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
              "sequenceId": "102",
              "content": "Kindly select one from the list.",
              "menu": [
                {
                  "image": "assets/img/aqua_icon.png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis",
                  "user": "What is AQUA?"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Web based Training",
                  "user": "Could you take me to the WBT section?"
                },
                {
                  "image": "assets/img/report_icon.png",
                  "title": "REPORT",
                  "description": "Aqua Reports",
                  "user": "Could you take me to the Reports section?"
                },
                {
                  "image": "assets/img/support_icon.png",
                  "title": "SUPPORT",
                  "description": "Find Solution",
                  "user": "Could you take me to the Support section?"
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
                  "content": `Welcome ${name}, to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the registration link for AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `Let’s continue from where we left off.`,
                  "wbt": [
                    {
                      "wbtList": [
                        {
                          "header": "Tips Training Document",
                          "description": "TIPS training document(Workshop Users day)",
                          "link": "to the pdf >",
                          "linkRef": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                        },
                        {
                          "header": "Microstrategy Online Course 9",
                          "description": "The Online course offer an introduction in Microstrategy Business Intelligence. The usage of Microstrategy Web..",
                          "link": "to the link >",
                          "linkRef": "http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
                        },
                        {
                          "header": "AQUA Tips and Tricks",
                          "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                          "link": "download >"
                        },
                        {
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Intended use and input… ",
                          "link": "download >"
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Matthias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} you have already completed the WBT. Would you like to access Reports?`
                }
              }]
          });
          break;
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} you have already completed the WBT. Would you like to access Reports?`
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
                  "content": `Welcome ${name}, to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the registration link for AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `I’m sorry ${name} It looks as if you haven’t completed the WBT yet. Completion of WBT is mandatory as to access the reports. Do you want me to take you to the WBT section?`
                }

              }]

          });
          break;
        case "Matthias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "105",
                  "content": " AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please select your intended report from the below list.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Product Reliability",
                          "description": "The W&G report overview offers additional information for every product reliability report :- Intended use - Lin…",
                          "link": "to the wiki >",
                          "user": "Could you give me Product Reliability report? "
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "The Diagnosis report overview offers additional information for every diagnostic reliability report :- Indended us… ",
                          "link": "to the link >",
                          "user": "Could you give me Diagnostic Reliability report? "
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "The FFV-T report overview offers additional information for every FFV-T report :-Indended use and input parameter… ",
                          "link": "to the link >",
                          "user": "Could you give me FFV-T report? "
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "to the link >",
                          "user": "Could you give me Inspection report? "
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "105",
                  "content": " AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please select your intended report from the below list.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Product Reliability",
                          "description": "The W&G report overview offers additional information for every product reliability report :- Intended use - Lin…",
                          "link": "to the wiki >",
                          "user": "Could you give me Product Reliability report? "
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "The Diagnosis report overview offers additional information for every diagnostic reliability report :- Indended us… ",
                          "link": "to the link >",
                          "user": "Could you give me Diagnostic Reliability report? "
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "The FFV-T report overview offers additional information for every FFV-T report :-Indended use and input parameter… ",
                          "link": "to the link >",
                          "user": "Could you give me FFV-T report? "
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "to the link >",
                          "user": "Could you give me Inspection report? "
                        }
                      ]
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
      if (name != "Matthias" || name != "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "109",
                "wbt": [
                  {
                    "content": "Download the Tips Training Document from here :",
                    "wbtForm": {
                      "img": "assets/img/pdf.png",
                      "titel": "Tips training.pdf",
                      "subTitle": "Open",
                      "link": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                    }
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
                "content": `${name} was found to have completed the WBT. now you can access reports.`
              }
            }]
        });
      }
      break;
    case 'report-category':
      var name = req.body.result.parameters.name;
      if (name == "Matthias" || name == "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "106",
                "content": "Please choose one of the following Product Reliability categories.",
                "report": [
                  {
                    "category": {
                      "title": "Product Reliability",
                      "user": "Could you give me Product Reliability report?",
                      "list": [
                        {
                          "title": "Quality reports",
                          "subCategory": [
                            {
                              "type": "P1A - Complaints per month of production (Q11)",
                              "tooltipContent": "Shows the number of vehicles produced, as well as the number of complaints, number of vehicles complained of within a certain production period.",
                              "user": "could you give me P1A report information?"
                            },
                            {
                              "type": "P1D - Complaints per production month after operating time (Q21)",
                              "tooltipContent": "Usage Presentation of the number of damages claimed, broken down into the months of production, given for vehicles of the same operating time.",
                              "user": "could you give me  P1D report information?"
                            }
                          ]
                        },
                        {
                          "title": "Hit lists",
                          "subCategory": [
                            {
                              "type": "P1B",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1B report information?"
                            },
                            {
                              "type": "P1C",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1C report information?"
                            }
                          ]
                        },
                        {
                          "title": "Distributions",
                          "subCategory": [
                            {
                              "type": "P1C1",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1C1 report information?"
                            },
                            {
                              "type": "P1E",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1E report information?"
                            }
                          ]
                        },
                        {
                          "title": "Production reports",
                          "subCategory": [
                            {
                              "type": "P1F",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1F report information?"
                            },
                            {
                              "type": "P1G",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1G report information?"
                            }
                          ]
                        },
                        {
                          "title": "Audit reports",
                          "subCategory": [
                            {
                              "type": "P1G1",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1G1 report information?"
                            },
                            {
                              "type": "P1H",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1H report information?"
                            }
                          ]
                        },
                        {
                          "title": "Special reports",
                          "subCategory": [
                            {
                              "type": "P1I",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1I report information?"
                            },
                            {
                              "type": "P1J",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1J report information?"
                            }
                          ]
                        },
                        {
                          "title": "Early warning system",
                          "subCategory": [
                            {
                              "type": "P1K",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1K report information?"
                            },
                            {
                              "type": "P1L",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1L report information?"
                            }
                          ]
                        },
                        {
                          "title": "Extrapolation",
                          "subCategory": [
                            {
                              "type": "P1M",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1M report information?"
                            },
                            {
                              "type": "P1N",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1N report information?"
                            }
                          ]
                        },
                        {
                          "title": "Other reports",
                          "subCategory": [
                            {
                              "type": "P1O",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1O report information?"
                            },
                            {
                              "type": "P1P",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1P report information?"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            }]
        });
      } else if (name == "Lakshmi") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""

            }, {
              "payload": {
                "sequenceId": "",
                "content": `Welcome ${name}, to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the registration link for AQUA.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/WBT.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now",
                      "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                    }
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
                "content": `Let’s continue from where we left off.`,
                "wbt": [
                  {
                    "wbtList": [
                      {
                        "header": "Tips Training Document",
                        "description": "TIPS training document(Workshop Users day)",
                        "link": "to the pdf >",
                        "linkRef": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                      },
                      {
                        "header": "Microstrategy Online Course 9",
                        "description": "The Online course offer an introduction in Microstrategy Business Intelligence. The usage of Microstrategy Web..",
                        "link": "to the link >",
                        "linkRef": "http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
                      },
                      {
                        "header": "AQUA Tips and Tricks",
                        "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                        "link": "download >"
                      },
                      {
                        "header": "Reports on Inspection",
                        "description": "The Inspection report overview offers additional information for every inspection report :- Intended use and input… ",
                        "link": "download >"
                      }
                    ]
                  }
                ]
              }

            }]

        });
      }
      break;
    case 'report-category-detail':
      var name = req.body.result.parameters.name;
      if (name == "Matthias") {
        matahisReportType = req.body.result.parameters.any;
        var reportLink;
        if (matahisReportType == 'P1A') {
          reportLink = "assets/P1A 20180316044508632.xlsx";
        } else {
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
        var report = [
          {
            "type": 0,
            "speech": ""

          }, {
            "payload": {
              "sequenceId": "",
              "content": `${matahisReportType} report is generated based on the following Vehicle Attributes. Please download the report`,
              "report": [
                {
                  "reportLink": `${reportLink}`
                }
              ]
            }
          }];
        matahisReport = report;
        return res.json({
          "messages": report
        });
      } else if (name == "Nicole") {
        NicoleReportType = req.body.result.parameters.any;
        var reportLink;
        if (NicoleReportType == 'P1A') {
          reportLink = "assets/P1A 20180316044508632.xlsx";
        } else {
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
        var report = [
          {
            "type": 0,
            "speech": ""

          }, {
            "payload": {
              "sequenceId": "",
              "content": `${NicoleReportType} report is generated based on the following Vehicle Attributes. Please download the report`,
              "report": [
                {
                  "reportLink": `${reportLink}`
                }
              ]
            }
          }];
        NicoleReport = report;
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
                "content": `Welcome ${name}, to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the registration link for AQUA.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/wbt_icon.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now",
                      "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                    }
                  }
                ]
              }
            }]
        });
      }
      break;
    case "default-fallback":
      return res.json({
        "messages": [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "118",
              "content": "I'm not sure I know the answer to that, but I can help you with these.",
              "menu": [
                {
                  "image": "assets/img/aqua_icon.png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis",
                  "user": "What is AQUA?"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Web based Training",
                  "user": "Could you take me to the WBT section?"
                },
                {
                  "image": "assets/img/report_icon.png",
                  "title": "REPORT",
                  "description": "Aqua Reports",
                  "user": "Could you take me to the Reports section?"
                },
                {
                  "image": "assets/img/support_icon.png",
                  "title": "SUPPORT",
                  "description": "Find Solution",
                  "user": "Could you take me to the Support section?"
                }
              ]
            }
          }]
      });
      break;

    case 'direct-report':
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
                  "content": `Welcome ${name}, to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the registration link for AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `I’m sorry ${name}, It looks as if you haven’t completed the WBT yet. Completion of WBT is mandatory as to access the reports. Do you want me to take you to the WBT section?`
                }

              }]

          });
          break;
        case "Matthias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "107",
                  "content": "Please select one of the following attributes to generate the report",
                  "report": [
                    {
                      "title": "Attributes",
                      "user": "Vehicle attribute",
                      "attributes": [
                        "Vehicle",
                        "Engine",
                        "Axel"
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "107",
                  "content": "Please select one of the following attributes to generate the report",
                  "report": [
                    {
                      "title": "Attributes",
                      "user": "Vehicle attribute",
                      "attributes": [
                        "Vehicle",
                        "Engine",
                        "Axel"
                      ]
                    }
                  ]
                }
              }]

          });
          break;

      }
      break;
  }
}else
{
 switch (actions) {
    case "welcome":
      var name = req.body.result.parameters.name;
      if (name == "Matthias" || name == "Nicole") {
        if (name == "Matthias" && matahisReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Hello ${name}, Last time you generated the report for ${matahisReportType}. Should I generate it again? YES or NO`
                }
              }]
          });
        } else if (NicoleReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Hello ${name}, Last time you generated the report for ${NicoleReportType}. Should I generate it again? YES or NO`
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
                  "sequenceId": "003",
                  "content": "Hi, Welcome to AQUA. I'm Lisa, I'm here to assist you. How may I help you?",
                   "emojis": {
    "emojiFlag": true,
    "happy": "That's awesome! What can I do for you?",
    "unwell": "Oh dang! These viruses I tell you. They affect me too. I can make things a little easier for you. Click on one of the options below",
    "sleepy": "Rise and shine! I can give you a head start by fetching some reports. Or just pick an action for me to take. ",
    "sad": "I am feeling sad"
  }
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
                "sequenceId": "003",
                "content": "Hi, Welcome to AQUA. I'm Lisa, I'm here to assist you. How may I help you?",
                 "emojis": {
    "emojiFlag": true,
    "happy": "That's awesome! What can I do for you?",
    "unwell": "Oh dang! These viruses I tell you. They affect me too. I can make things a little easier for you. Click on one of the options below ",
    "sleepy": "Rise and shine! I can give you a head start by fetching some reports. Or just pick an action for me to take. ",
    "sad": "Take a deep breath and then let’s begin"
  }

              }
            }]
        });
      }
      break;
    case 'generated-report':
      var name = req.body.result.parameters.name;
      if (name == "Matthias") {
        return res.json({
          "messages": matahisReport
        });
      } else {
        return res.json({
          "messages": NicoleReport
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
  "sequenceId": "102",
  "content": "Bitte wählen Sie einen aus der Liste.",
  "menu": [
    {
      "image": "assets/img/aqua_icon.png",
      "title": "AQUA",
      "description": "Erweiterte Qualitätsanalyse",
      "user": "Was ist AQUA?"
    },
    {
      "image": "assets/img/wbt_icon.png",
      "title": "WBT",
      "description": "Webbasiertes Training",
      "user": "Could you take me to the WBT section?"
    },
    {
      "image": "assets/img/report_icon.png",
      "title": "REPORT",
      "description": "AQUA Berichte",
      "user": "Könnten Sie mich zum WBT-Bereich bringen?"
    },
    {
      "image": "assets/img/support_icon.png",
      "title": "UNTERSTÜTZUNG",
      "description": "Finden Sie Lösung",
      "user": "Könnten Sie mich zum Support-Bereich bringen?"
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
                  "content": `herzlich willkommen ${name}, zu WBT. Um Zugang zu AQUA zu erhalten, muss AQUA (WBT) Web Based Training durchgeführt werden. AQUA bietet ein reichhaltiges WBT-Set für den Benutzer, um von AQUA zu lernen und zu profitieren. Unten ist der Registrierungslink für AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Anmeldeformular für webbasiertes Training.",
                        "subTitle": "Jetzt registrieren",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `Lass uns von dort weitermachen, wo wir aufgehört haben`,
                  "wbt": [
                    {
                      "wbtList": [
                        {
                          "header": "Tipps Schulungsunterlagen",
                          "description": "TIPS-Schulungsdokument (Workshop Anwendertag)",
                          "link": "to the pdf >",
                          "linkRef": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                        },
                        {
                          "header": "Microstrategy Online Kurs 9",
                          "description": "Der Online-Kurs bietet eine Einführung in Microstrategy Business Intelligence. Die Verwendung von Microstrategy Web ..",
                          "link": "to the link >",
                          "linkRef": "http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
                        },
                        {
                          "header": "AQUA Tipps und Tricks",
                          "description": "AQUA Tips & Tricks Schulungsunterlagen (Workshop WSUM 2015)",
                          "link": "download >"
                        },
                        {
                          "header": "Berichte über die Inspektion",
                          "description": "Die Inspektionsbericht-Übersicht bietet zu jedem Inspektionsbericht zusätzliche Informationen: - Bestimmungsgemäße Verwendung und Eingabe ...",
                          "link": "download >"
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Matthias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} Sie haben das WBT bereits abgeschlossen. Möchten Sie auf Berichte zugreifen?`
                }
              }]
          });
          break;
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name}Sie haben das WBT bereits abgeschlossen. Möchten Sie auf Berichte zugreifen?`
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
                  "content": `Herzlich willkommen ${name}, zu WBT. Um Zugang zu AQUA zu erhalten, muss AQUA (WBT) Web Based Training durchgeführt werden. AQUA bietet ein reichhaltiges WBT-Set für den Benutzer, um von AQUA zu lernen und zu profitieren. Unten ist der Registrierungslink für AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Anmeldeformular für webbasiertes Training.",
                        "subTitle": "Jetzt registrieren",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `Es tut mir Leid ${name} Es sieht so aus, als ob Sie das WBT noch nicht abgeschlossen haben. Der Abschluss des WBT ist obligatorisch, um auf die Berichte zugreifen zu können. Willst du, dass ich dich zum WBT-Bereich bringe?`
                }

              }]

          });
          break;
        case "Matthias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "105",
                  "content": " AQUA bietet ein reichhaltiges Set für Berichte in Form von Standard- und benutzerdefinierten Berichten für die Endbenutzer. Bitte wählen Sie den gewünschten Bericht aus der folgenden Liste.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Produktzuverlässigkeit",
                          "description": "Die W & G-Berichtsübersicht bietet für jeden Produktzuverlässigkeitsbericht zusätzliche Informationen: - Verwendungszweck - Lini ...",
                          "link": "to the wiki >",
                          "user": "Können Sie mir einen Bericht zur Zuverlässigkeit der Produkte geben?"
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostische Zuverlässigkeit",
                          "description": "Die Übersicht über den Diagnosebericht bietet zusätzliche Informationen für jeden Diagnose-Zuverlässigkeitsbericht: - Indended us ...",
                          "link": "to the link >",
                          "user": "Könnten Sie mir einen Diagnostic Reliability Report geben?"
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "Die FFV-T-Report-Übersicht bietet für jeden FFV-T-Report zusätzliche Informationen: -Induzierte Verwendung und Eingabeparameter ...",
                          "link": "to the link >",
                          "user": "Könnten Sie mir einen FFV-T-Bericht geben?"
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Berichte über die Inspektion",
                          "description": "Die Inspektionsbericht-Übersicht bietet zu jedem Inspektionsbericht zusätzliche Informationen: - Einsatz und Eingabe ...",
                          "link": "to the link >",
                          "user": "Können Sie mir einen Inspektionsbericht geben? "
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "105",
                  "content": " AQUA bietet ein reichhaltiges Set für Berichte in Form von Standard- und benutzerdefinierten Berichten für die Endbenutzer. Bitte wählen Sie den gewünschten Bericht aus der folgenden Liste.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Produktzuverlässigkeit",
                          "description": "Die W & G-Berichtsübersicht bietet für jeden Produktzuverlässigkeitsbericht zusätzliche Informationen: - Verwendungszweck - Lini ...",
                          "link": "to the wiki >",
                          "user": "Können Sie mir einen Bericht zur Zuverlässigkeit der Produkte geben?"
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "Die Übersicht über den Diagnosebericht bietet zusätzliche Informationen für jeden Diagnose-Zuverlässigkeitsbericht: - Indended us ...",
                          "link": "to the link >",
                          "user": "Könnten Sie mir einen Diagnostic Reliability Report geben?"
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "Die FFV-T-Report-Übersicht bietet für jeden FFV-T-Report zusätzliche Informationen: -Induzierte Verwendung und Eingabeparameter ...",
                          "link": "to the link >",
                          "user": "Könnten Sie mir einen FFV-T-Bericht geben?"
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Berichte über die Inspektion",
                          "description": "Die Inspektionsbericht-Übersicht bietet zu jedem Inspektionsbericht zusätzliche Informationen: - Einsatz und Eingabe ...",
                          "link": "to the link >",
                          "user": "Können Sie mir einen Inspektionsbericht geben?"
                        }
                      ]
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
      if (name != "Matthias" || name != "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "109",
                "wbt": [
                  {
                    "content": "Laden Sie hier das Tips Training Document herunter:",
                    "wbtForm": {
                      "img": "assets/img/pdf.png",
                      "titel": "Tipps training.pdf",
                      "subTitle": "Öffnen",
                      "link": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                    }
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
                "content": `${name} wurde festgestellt, dass das WBT abgeschlossen wurde. Jetzt können Sie auf Berichte zugreifen.`
              }
            }]
        });
      }
      break;
    case 'report-category':
      var name = req.body.result.parameters.name;
      if (name == "Matthias" || name == "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "106",
                "content": "Bitte wählen Sie eine der folgenden Produktsicherheitskategorien.",
                "report": [
                  {
                    "category": {
                      "title": "Produktzuverlässigkeit",
                      "user": "Können Sie mir einen Bericht zur Zuverlässigkeit der Produkte geben?",
                      "list": [
                        {
                          "title": "Qualitätsberichte",
                          "subCategory": [
                            {
                              "type": "P1A - Reklamationen pro Monat der Produktion (Q11)",
                              "tooltipContent": "Zeigt die Anzahl der produzierten Fahrzeuge sowie die Anzahl der Beanstandungen, die Anzahl der beanstandeten Fahrzeuge innerhalb einer bestimmten Produktionszeit an.",
                              "user": "Könnten Sie mir P1A-Berichtsinformationen geben?"
                            },
                            {
                              "type": "P1D - Reklamationen pro Produktionsmonat nach Betriebszeit (Q21)",
                              "tooltipContent": "Verwendung Angabe der Anzahl der geltend gemachten Schäden, aufgeschlüsselt nach Produktionsmonaten, für Fahrzeuge gleicher Betriebsdauer.",
                              "user": "Könnten Sie mir P1D-Berichtsinformationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Trefferlisten",
                          "subCategory": [
                            {
                              "type": "P1B",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1B-Berichtsinformationen geben?"
                            },
                            {
                              "type": "P1C",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1C-Berichtsinformationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Distributionen",
                          "subCategory": [
                            {
                              "type": "P1C1",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1C1-Berichtsinformationen geben?"
                            },
                            {
                              "type": "P1E",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1e-Bericht Informationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Produktionsberichte",
                          "subCategory": [
                            {
                              "type": "P1F",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1F-Bericht Informationen geben?"
                            },
                            {
                              "type": "P1G",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1G-Berichtsinformationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Prüfberichte",
                          "subCategory": [
                            {
                              "type": "P1G1",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1G1-Berichtsinformationen geben?"
                            },
                            {
                              "type": "P1H",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1H-Berichtsinformationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Sonderberichte",
                          "subCategory": [
                            {
                              "type": "P1I",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1I-Berichtsinformationen geben?
"
                            },
                            {
                              "type": "P1J",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1J Bericht Informationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Frühwarnsystem",
                          "subCategory": [
                            {
                              "type": "P1K",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir Informationen zum P1K-Bericht geben?"
                            },
                            {
                              "type": "P1L",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1L-Berichtsinformationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Extrapolation",
                          "subCategory": [
                            {
                              "type": "P1M",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1M-Berichtsinformationen geben?"
                            },
                            {
                              "type": "P1N",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1N-Berichtsinformationen geben?"
                            }
                          ]
                        },
                        {
                          "title": "Andere Berichte",
                          "subCategory": [
                            {
                              "type": "P1O",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1O-Berichtsinformationen geben?"
                            },
                            {
                              "type": "P1P",
                              "tooltipContent": "Entschuldigung, dieser Bericht ist momentan nicht verfügbar. Bitte versuchen Sie es nachher.",
                              "user": "Könnten Sie mir P1P-Bericht Informationen geben?"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            }]
        });
      } else if (name == "Lakshmi") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""

            }, {
              "payload": {
                "sequenceId": "",
                "content": `
Herzlich willkommen ${name}, zu WBT. Um Zugang zu AQUA zu erhalten, muss AQUA (WBT) Web Based Training durchgeführt werden. AQUA bietet ein reichhaltiges WBT-Set für den Benutzer, um von AQUA zu lernen und zu profitieren. Unten ist der Registrierungslink für AQUA.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/WBT.png",
                      "titel": "Anmeldeformular für webbasiertes Training.",
                      "subTitle": "Jetzt registrieren",
                      "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                    }
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
                "content": `Lass uns von dort weitermachen, wo wir aufgehört haben.`,
                "wbt": [
                  {
                    "wbtList": [
                      {
                        "header": "Tipps Schulungsunterlagen",
                        "description": "TIPS-Schulungsdokument (Workshop Anwendertag)",
                        "link": "to the pdf >",
                        "linkRef": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                      },
                      {
                        "header": "Microstrategy Online Kurs 9",
                        "description": "Der Online-Kurs bietet eine Einführung in Microstrategy Business Intelligence. Die Verwendung von Microstrategy Web ..",
                        "link": "to the link >",
                        "linkRef": "http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
                      },
                      {
                        "header": "AQUA Tipps und Tricks",
                        "description": "AQUA Tips & Tricks Schulungsunterlagen (Workshop WSUM 2015)",
                        "link": "download >"
                      },
                      {
                        "header": "Berichte über die Inspektion",
                        "description": "Die Inspektionsbericht-Übersicht bietet zu jedem Inspektionsbericht zusätzliche Informationen: - Bestimmungsgemäße Verwendung und Eingabe ...",
                        "link": "download >"
                      }
                    ]
                  }
                ]
              }

            }]

        });
      }
      break;
    case 'report-category-detail':
      var name = req.body.result.parameters.name;
      if (name == "Matthias") {
        matahisReportType = req.body.result.parameters.any;
        var reportLink;
        if (matahisReportType == 'P1A') {
          reportLink = "assets/P1A 20180316044508632.xlsx";
        } else {
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
        var report = [
          {
            "type": 0,
            "speech": ""

          }, {
            "payload": {
              "sequenceId": "",
              "content": `${matahisReportType} Der Bericht wird basierend auf den folgenden Fahrzeugattributen generiert. Bitte laden Sie den Bericht herunter`,
              "report": [
                {
                  "reportLink": `${reportLink}`
                }
              ]
            }
          }];
        matahisReport = report;
        return res.json({
          "messages": report
        });
      } else if (name == "Nicole") {
        NicoleReportType = req.body.result.parameters.any;
        var reportLink;
        if (NicoleReportType == 'P1A') {
          reportLink = "assets/P1A 20180316044508632.xlsx";
        } else {
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
        var report = [
          {
            "type": 0,
            "speech": ""

          }, {
            "payload": {
              "sequenceId": "",
              "content": `${NicoleReportType} Der Bericht wird basierend auf den folgenden Fahrzeugattributen generiert. Bitte laden Sie den Bericht herunter`,
              "report": [
                {
                  "reportLink": `${reportLink}`
                }
              ]
            }
          }];
        NicoleReport = report;
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
                "content": `Herzlich willkommen ${name}, zu WBT. Um Zugang zu AQUA zu erhalten, muss AQUA (WBT) Web Based Training durchgeführt werden. AQUA bietet ein reichhaltiges WBT-Set für den Benutzer, um von AQUA zu lernen und zu profitieren. Unten ist der Registrierungslink für AQUA.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/wbt_icon.png",
                      "titel": "Anmeldeformular für webbasiertes Training.",
                      "subTitle": "Jetzt registrieren",
                      "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                    }
                  }
                ]
              }
            }]
        });
      }
      break;
    case "default-fallback":
      return res.json({
        "messages": [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "118",
              "content": "Entschuldigung, ich verstehe deine Frage nicht. Lass mich dich zum Hauptmenü bringen.",
              "menu": [
                {
                  "image": "assets/img/aqua_icon.png",
                  "title": "AQUA",
                  "description": "Erweiterte Qualitätsanalyse",
                  "user": "Was ist AQUA?"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Webbasiertes Training",
                  "user": "Könnten Sie mich zum WBT-Bereich bringen?"
                },
                {
                  "image": "assets/img/report_icon.png",
                  "title": "REPORT",
                  "description": "Aqua Berichte",
                  "user": "Können Sie mich zum Abschnitt "Berichte" bringen?"
                },
                {
                  "image": "assets/img/support_icon.png",
                  "title": "SUPPORT",
                  "description": "Finden Sie Lösung",
                  "user": "Könnten Sie mich zum Support-Bereich bringen?"
                }
              ]
            }
          }]
      });
      break;

    case 'direct-report':
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
                  "content": `Herzlich willkommen ${name}, zu WBT. Um Zugang zu AQUA zu erhalten, muss AQUA (WBT) Web Based Training durchgeführt werden. AQUA bietet ein reichhaltiges WBT-Set für den Benutzer, um von AQUA zu lernen und zu profitieren. Unten ist der Registrierungslink für AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Anmeldeformular für webbasiertes Training.",
                        "subTitle": "Jetzt registrieren",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `Es tut mir Leid ${name},Es sieht so aus, als ob Sie das WBT noch nicht abgeschlossen haben. Der Abschluss des WBT ist obligatorisch, um auf die Berichte zugreifen zu können. Willst du, dass ich dich zum WBT-Bereich bringe?`
                }

              }]

          });
          break;
        case "Matthias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "107",
                  "content": "Wählen Sie eines der folgenden Attribute aus, um den Bericht zu generieren",
                  "report": [
                    {
                      "title": "Attributes",
                      "user": "Vehicle attribute",
                      "attributes": [
                        "Vehicle",
                        "Engine",
                        "Axel"
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "107",
                  "content": "Wählen Sie eines der folgenden Attribute aus, um den Bericht zu generieren",
                  "report": [
                    {
                      "title": "Attributes",
                      "user": "Vehicle attribute",
                      "attributes": [
                        "Vehicle",
                        "Engine",
                        "Axel"
                      ]
                    }
                  ]
                }
              }]

          });
          break;

      }
      break;
  }
 
}
});

server.listen((process.env.PORT || 8000), function () {
  console.log("Server is up and running...");
});



