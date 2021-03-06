$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/logon_customer.feature");
formatter.feature({
  "line": 2,
  "name": "Открытие страницы ЗМО и авторизация заказчиком",
  "description": "",
  "id": "открытие-страницы-змо-и-авторизация-заказчиком",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@customer_feat"
    }
  ]
});
formatter.before({
  "duration": 6478363800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Открытие страницы, пеход на страницу авторизации, авторизация заказчиком 223 по сертификату",
  "description": "",
  "id": "открытие-страницы-змо-и-авторизация-заказчиком;открытие-страницы,-пеход-на-страницу-авторизации,-авторизация-заказчиком-223-по-сертификату",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Открываем https://223-zmo-trunk-ui.rts-tender.ru/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Ждём загрузки страницы - ожидание исчезновения спиннера",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Переход на страницу авторизации через Вход",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Ждём загрузки страницы - ожидание исчезновения спиннера перед авторизацией",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Переход на страницу авторизации Вход по 223ФЗ РТС-Тендер в разделе Для заказчика",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Выбираем сертификат",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Нажимаем кнопку Войти",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Ждём загрузки страницы - ожидание исчезновения спиннера после авторизации",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Проверяем нужно ли разрешение на доступ",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Отображаем наименование организации прописанное на странице",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "All",
  "keyword": "Then "
});
formatter.match({
  "location": "LogonCustomerZmo.open_zmo_mail_page()"
});
formatter.result({
  "duration": 6738396100,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait()"
});
formatter.result({
  "duration": 4717809400,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page()"
});
formatter.result({
  "duration": 756538000,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_before_auth()"
});
formatter.result({
  "duration": 18282400,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page_223_customer()"
});
formatter.result({
  "duration": 1743058900,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.wait_downloading_sertificate_page()"
});
formatter.result({
  "duration": 4201757800,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.sertificate_choise()"
});
formatter.result({
  "duration": 135787400,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_after_sertificate_choise()"
});
formatter.result({
  "duration": 25634300,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.need_acces_to_certificate()"
});
formatter.result({
  "duration": 5094901500,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.show_organization_from_main_page()"
});
formatter.result({
  "duration": 90186500,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.all()"
});
formatter.result({
  "duration": 8896996100,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-EATC6GU\u0027, ip: \u0027172.19.14.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\Tester\\AppData\\Local\\Temp\\scoped_dir1168_23652}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9c89333d15fd8441068d80300a870e22\nScreenshot: file:/C:/autotests/ZMO_func/build/reports/tests/1579281835989.0.png\nTimeout: 4 s.\nCaused by: ElementNotVisibleException: element not visible\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:107)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:61)\r\n\tat com.sun.proxy.$Proxy13.uploadFile(Unknown Source)\r\n\tat StepDefinitions.LogonCustomerZmo.all(LogonCustomerZmo.java:78)\r\n\tat ✽.Then All(features/logon_customer.feature:14)\r\nCaused by: org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-EATC6GU\u0027, ip: \u0027172.19.14.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\Tester\\AppData\\Local\\Temp\\scoped_dir1168_23652}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9c89333d15fd8441068d80300a870e22\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:122)\r\n\tat com.codeborne.selenide.commands.UploadFile.uploadFile(UploadFile.java:52)\r\n\tat com.codeborne.selenide.commands.UploadFile.execute(UploadFile.java:29)\r\n\tat com.codeborne.selenide.commands.UploadFile.execute(UploadFile.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:137)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:85)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:61)\r\n\tat com.sun.proxy.$Proxy13.uploadFile(Unknown Source)\r\n\tat StepDefinitions.LogonCustomerZmo.all(LogonCustomerZmo.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
});