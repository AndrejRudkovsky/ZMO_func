@customer_feat
Feature: Открытие страницы ЗМО и авторизация заказчиком
 Scenario: Открытие страницы, пеход на страницу авторизации, авторизация заказчиком 223 по сертификату
   Given Открываем https://223-zmo-trunk-ui.rts-tender.ru/
   And Ждём загрузки страницы - ожидание исчезновения спиннера
   Then Переход на страницу авторизации через Вход
   And Ждём загрузки страницы - ожидание исчезновения спиннера перед авторизацией
   Then Переход на страницу авторизации Вход по 223ФЗ РТС-Тендер в разделе Для заказчика
   And Выбираем сертификат
   And Нажимаем кнопку Войти
   And Ждём загрузки страницы - ожидание исчезновения спиннера после авторизации
   And Проверяем нужно ли разрешение на доступ
   Then Отображаем наименование организации прописанное на странице
   Then All
