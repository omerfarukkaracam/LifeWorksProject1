$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Soucedemo Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open soucedemo page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.openWebPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userEnterCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User login to soucedemo and land into product page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "user verify product page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userVerifyProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "select 3product but buy 2 product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "User select three products",
  "keyword": "And "
});
formatter.step({
  "name": "user goes to basket and buy two products",
  "keyword": "And "
});
formatter.step({
  "name": "user fill checkout information with \"\u003cname\u003e\",\"\u003csurname\u003e\",\"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User finish the order",
  "keyword": "And "
});
formatter.step({
  "name": "verify checkout complete with \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "surname",
        "postcode"
      ]
    },
    {
      "cells": [
        "Omer",
        "karacam",
        "RG6 3UD"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open soucedemo page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.openWebPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userEnterCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select 3product but buy 2 product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "User select three products",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userSelectThreeProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to basket and buy two products",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userGoesToBasketAndBuyTwoProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill checkout information with \"Omer\",\"karacam\",\"RG6 3UD\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userFillCheckoutInformationWith(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finish the order",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userFinishTheOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify checkout complete with \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.verifyCheckoutCompleteWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open soucedemo page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.openWebPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userEnterCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User buy products $30 to $60",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "user goes to basket and buy products",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userGoesToBasketAndBuyProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill checkout information \"omer\",\"Karacam\",\"Rg6 3UD\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userFillCheckoutInformations(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finish the order",
  "keyword": "And "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.userFinishTheOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify checkout complete with \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.project.step_definitions.LoginStepDef.verifyCheckoutCompleteWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});