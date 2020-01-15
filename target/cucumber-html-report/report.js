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
  "duration": 6500844900,
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
  "duration": 2630260700,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait()"
});
formatter.result({
  "duration": 264121300,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page()"
});
formatter.result({
  "duration": 1288810200,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_before_auth()"
});
formatter.result({
  "duration": 21456200,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.go_authorization_page_223_customer()"
});
formatter.result({
  "duration": 1298730000,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.wait_downloading_sertificate_page()"
});
formatter.result({
  "duration": 1556467900,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.sertificate_choise()"
});
formatter.result({
  "duration": 70827400,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.spinner_wait_after_sertificate_choise()"
});
formatter.result({
  "duration": 17562000,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.need_acces_to_certificate()"
});
formatter.result({
  "duration": 2548539200,
  "status": "passed"
});
formatter.match({
  "location": "LogonCustomerZmo.show_organization_from_main_page()"
});
formatter.result({
  "duration": 68993900,
  "status": "passed"
});
formatter.uri("features/second_feature.feature");
formatter.feature({
  "line": 2,
  "name": "Открытие страницы ЗМО и авторизация поставщиком",
  "description": "",
  "id": "открытие-страницы-змо-и-авторизация-поставщиком",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@request_for_quotations2"
    }
  ]
});
formatter.before({
  "duration": 5330378800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Открытие страницы, пеход на страницу авторизации, авторизация поставщиком 223 по сертификату",
  "description": "",
  "id": "открытие-страницы-змо-и-авторизация-поставщиком;открытие-страницы,-пеход-на-страницу-авторизации,-авторизация-поставщиком-223-по-сертификату",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Открываем https://223-zmo-trunk-ui.rts-tender.ru/. Поставщик",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Ждём загрузки страницы - ожидание исчезновения спиннера. Поставщик",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Переход на страницу авторизации через Вход. Поставщик",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Ждём загрузки страницы - ожидание исчезновения спиннера перед авторизацией. Поставщик",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Переход на страницу авторизации Вход по 223ФЗ РТС-Тендер в разделе Для поставщика",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Выбираем сертификат. Поставщик",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Нажимаем кнопку Войти. Поставщик",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Ждём загрузки страницы - ожидание исчезновения спиннера после авторизации. Поставщик",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Проверяем нужно ли разрешение на доступ. Поставщик",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Отображаем наименование организации прописанное на странице. Поставщик",
  "keyword": "Then "
});
formatter.match({
  "location": "LogonSupplierZmo.open_zmo_mail_page()"
});
formatter.result({
  "duration": 1862815800,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.spinner_wait()"
});
formatter.result({
  "duration": 823979100,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.go_authorization_page()"
});
formatter.result({
  "duration": 1176486600,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.spinner_wait_before_auth()"
});
formatter.result({
  "duration": 16456500,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.go_authorization_page_223_customer()"
});
formatter.result({
  "duration": 1350911400,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.wait_downloading_sertificate_page()"
});
formatter.result({
  "duration": 1681843000,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.sertificate_choise()"
});
formatter.result({
  "duration": 129424900,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.spinner_wait_after_sertificate_choise()"
});
formatter.result({
  "duration": 18818600,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.need_acces_to_certificate()"
});
formatter.result({
  "duration": 2763884000,
  "status": "passed"
});
formatter.match({
  "location": "LogonSupplierZmo.show_organization_from_main_page()"
});
formatter.result({
  "duration": 53498000,
  "status": "passed"
});
});