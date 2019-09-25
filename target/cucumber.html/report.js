$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/demo2.Feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" as a username and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password456"
      ],
      "line": 12,
      "id": "login-action;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ],
      "line": 13,
      "id": "login-action;successful-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"lalitha\" as a username and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestmeApp3Parameterization.user_opens_the_application()"
});
formatter.result({
  "duration": 10817130000,
  "status": "passed"
});
formatter.match({
  "location": "TestmeApp3Parameterization.user_click_on_signin_link()"
});
formatter.result({
  "duration": 903129900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lalitha",
      "offset": 13
    },
    {
      "val": "password123",
      "offset": 41
    }
  ],
  "location": "TestmeApp3Parameterization.user_enters_as_a_username_and(String,String)"
});
formatter.result({
  "duration": 237821700,
  "status": "passed"
});
formatter.match({
  "location": "TestmeApp3Parameterization.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 313959500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"admin\" as a username and \"password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestmeApp3Parameterization.user_opens_the_application()"
});
formatter.result({
  "duration": 12421777500,
  "status": "passed"
});
formatter.match({
  "location": "TestmeApp3Parameterization.user_click_on_signin_link()"
});
formatter.result({
  "duration": 1649256500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password456",
      "offset": 39
    }
  ],
  "location": "TestmeApp3Parameterization.user_enters_as_a_username_and(String,String)"
});
formatter.result({
  "duration": 312766900,
  "status": "passed"
});
formatter.match({
  "location": "TestmeApp3Parameterization.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 977994400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Lalitha\" as a username and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestmeApp3Parameterization.user_opens_the_application()"
});
formatter.result({
  "duration": 18433858600,
  "status": "passed"
});
formatter.match({
  "location": "TestmeApp3Parameterization.user_click_on_signin_link()"
});
formatter.result({
  "duration": 981392600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 41
    }
  ],
  "location": "TestmeApp3Parameterization.user_enters_as_a_username_and(String,String)"
});
formatter.result({
  "duration": 618064300,
  "status": "passed"
});
formatter.match({
  "location": "TestmeApp3Parameterization.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 545875900,
  "status": "passed"
});
});