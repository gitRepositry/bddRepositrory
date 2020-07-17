$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Test Environment",
  "description": "",
  "id": "login-to-test-environment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6371333400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefinito.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 1804140600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Log out from  MyAccount",
  "description": "",
  "id": "login-to-test-environment;log-out-from--myaccount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters username \u0027sdet@tekschool.us\u0027 and Password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Should be logged in to user Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User should be logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinito.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 82094900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinito.user_click_on_Login()"
});
formatter.result({
  "duration": 336562700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 22
    },
    {
      "val": "sdet",
      "offset": 55
    }
  ],
  "location": "loginStepDefinito.user_enters_username_sdet_tekschool_us_and_Password_sdet(String,String)"
});
formatter.result({
  "duration": 287993100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinito.user_click_on_Login_button()"
});
formatter.result({
  "duration": 575201100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinito.user_Should_be_logged_in_to_user_Dashboard()"
});
formatter.result({
  "duration": 9205900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinito.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 58691900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinito.user_click_on_logout()"
});
formatter.result({
  "duration": 553080400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinito.user_should_be_logged_out()"
});
formatter.result({
  "duration": 11364500,
  "status": "passed"
});
formatter.after({
  "duration": 691371400,
  "status": "passed"
});
});