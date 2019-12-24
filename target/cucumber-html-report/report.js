$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/main_feature.feature");
formatter.feature({
  "line": 2,
  "name": "Открытие страницы ЗМО и авторизация заказчиком",
  "description": "",
  "id": "открытие-страницы-змо-и-авторизация-заказчиком",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@request_for_quotations1"
    }
  ]
});
formatter.before({
  "duration": 6824657900,
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
formatter.match({
  "location": "LogonCustomerZmo.open_zmo_mail_page()"
});
formatter.result({
  "duration": 1904410400,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait()"
});
formatter.result({
  "duration": 306194200,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page()"
});
formatter.result({
  "duration": 1574324800,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_before_auth()"
});
formatter.result({
  "duration": 21702300,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page_223_customer()"
});
formatter.result({
  "duration": 1552770500,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.wait_downloading_sertificate_page()"
});
formatter.result({
  "duration": 1988095000,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.sertificate_choise()"
});
formatter.result({
  "duration": 87224200,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_after_sertificate_choise()"
});
formatter.result({
  "duration": 18802300,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.need_acces_to_certificate()"
});
formatter.result({
  "duration": 2587535300,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.show_organization_from_main_page()"
});
formatter.result({
  "duration": 116226600,
  "status": "passed"
});
formatter.uri("features/second_feature.feature");
formatter.feature({
  "line": 2,
  "name": "Открытие страницы ЗМО и авторизация заказчиком",
  "description": "",
  "id": "открытие-страницы-змо-и-авторизация-заказчиком",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@request_for_quotations2"
    }
  ]
});
formatter.before({
  "duration": 5949615400,
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
formatter.match({
  "location": "LogonCustomerZmo.open_zmo_mail_page()"
});
formatter.result({
  "duration": 1927936000,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait()"
});
formatter.result({
  "duration": 394763300,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page()"
});
formatter.result({
  "duration": 1291977700,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_before_auth()"
});
formatter.result({
  "duration": 22247800,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page_223_customer()"
});
formatter.result({
  "duration": 1188973900,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.wait_downloading_sertificate_page()"
});
formatter.result({
  "duration": 1962980700,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.sertificate_choise()"
});
formatter.result({
  "duration": 84695400,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_after_sertificate_choise()"
});
formatter.result({
  "duration": 25565800,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.need_acces_to_certificate()"
});
formatter.result({
  "duration": 3717032600,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.show_organization_from_main_page()"
});
formatter.result({
  "duration": 71638100,
  "status": "passed"
});
});