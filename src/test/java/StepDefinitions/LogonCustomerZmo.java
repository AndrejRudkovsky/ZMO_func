package StepDefinitions;

import SetUp.ConfigSetup;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;


import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import java.io.File;


public class LogonCustomerZmo extends ConfigSetup {

    private WebDriver driver;

    public LogonCustomerZmo() {
        driver = ChromeInitialization.driver;
    }

    @Given("^Открываем https://223-zmo-trunk-ui.rts-tender.ru/$")
    public void open_zmo_mail_page() {
        driver.get(trunkMainPageZMO);
    }

    @And ("^Ждём загрузки страницы - ожидание исчезновения спиннера$")
    public void spinner_wait() {
        $(By.cssSelector(spinnerOnMainPage)).waitWhile(visible, 60000);
    }

    @Then ("^Переход на страницу авторизации через Вход$")
    public void go_authorization_page() {
        $(enterMainPageButton).click();
    }

    @And ("^Ждём загрузки страницы - ожидание исчезновения спиннера перед авторизацией$")
    public void spinner_wait_before_auth() {
        spinner_wait();
    }

    @Then ("^Переход на страницу авторизации Вход по 223ФЗ РТС-Тендер в разделе Для заказчика$")
    public void go_authorization_page_223_customer() {
        $(enter223CustomerButton).click();
    }

    @And ("^Выбираем сертификат$")
    public void wait_downloading_sertificate_page() {
        $(By.xpath(XnameOfZakZMO)).waitUntil(visible,20000).click();
    }
    @And ("^Нажимаем кнопку Войти$")
    public void sertificate_choise() {
        $(By.cssSelector(enterCertificateButton)).click();
    }

    @And ("^Ждём загрузки страницы - ожидание исчезновения спиннера после авторизации$")
    public void spinner_wait_after_sertificate_choise() {
        spinner_wait();
    }

    @And("^Проверяем нужно ли разрешение на доступ$")
    public void need_acces_to_certificate() {
        if ($(By.cssSelector(grantAcces)).waitUntil(visible,2000).exists()) {
            $(By.cssSelector(grantAcces)).click();
        }
    }
    @Then ("^Отображаем наименование организации прописанное на странице$")
    public void show_organization_from_main_page() {
        System.out.println($(By.cssSelector(organizationNameOnMainPage)).getText());
    }
    @Then ("^All$")
    public void all() {
        $(By.cssSelector(createTradeButtonOnMainPage)).waitUntil(visible,20000).click(); //открываем форму

        $(By.xpath(fzType223)).waitUntil(visible,20000).click(); //проставляем ФЗ

        $(By.xpath(financeSourceBudget)).waitUntil(visible,20000).click(); //проставляем источник финансирования

        $(By.cssSelector(tradeName)).waitUntil(visible,20000).sendKeys("Автотест ЗМО"); // Имя закупки

        $(By.cssSelector(addPosition)).waitUntil(visible,20000).click(); //Вызываем модальное окно выбора позиции

        $(By.cssSelector("span[data-bind='click: pageVM.addProduct, visible: !pageVM.IsProductEditMode()']")).waitUntil(visible,20000); //Ждём открытия модалки

        $(By.cssSelector(positionName)).waitUntil(visible,20000).sendKeys("Автотест ЗМО. наименование позиции"); //Вводим наименование позиции лота

        $(By.cssSelector(positionOKPD2)).waitUntil(visible,20000).sendKeys("10.51.52.121"); //Вбиваем ОКПД

        $(By.cssSelector(positionOKEI)).waitUntil(visible,20000).sendKeys("Гектолитр чистого (100 %) спирта"); //Выбираем ОКЕИ
           // $(By.cssSelector("li[id='ui-id-1129']")).waitUntil(visible,20000);  // Ждём выпадайку
            $(By.cssSelector(positionOKEI)).sendKeys(Keys.DOWN); //Жмякаем "вниз" на клавиатуре
            $(By.cssSelector(positionOKEI)).sendKeys(Keys.ENTER); //Жмякаем "Enter" на клавиатуре

        $(By.cssSelector(positionQuantity)).waitUntil(visible,20000).sendKeys("10"); //Вбиваем кол-во

        $(By.cssSelector(positionPrice)).waitUntil(visible,20000).sendKeys("8"); //Вбиваем цену

        $(By.cssSelector(positionAddButton)).waitUntil(visible,20000).click(); //Нажимаем добавить

        $(By.cssSelector("span[data-bind='click: pageVM.addProduct, visible: !pageVM.IsProductEditMode()']")).waitUntil(not(visible),20000); //Ждём закрытия модалки

        $(By.cssSelector(autoFillContactInfo)).waitUntil(visible,20000).click(); //Вбиваем ФИО, ТЕЛЕФОН, регион

        $(By.cssSelector(deliveryTerms)).waitUntil(visible,20000).sendKeys("Условия доставки"); //Вбиваем условия доставки

        $(By.cssSelector(deliveryPlace)).waitUntil(visible,20000).sendKeys("Место доставки"); //Вбиваем условия доставки

        $(By.cssSelector(paymentConditions)).waitUntil(visible,20000).sendKeys("Условия оплаты"); //Вбиваем условия оплаты

        $(By.cssSelector(tradeEndDate)).waitUntil(visible,20000).sendKeys("27012020"); //Вбиваем дату окончания TODO

        $(By.cssSelector(tradeDescription)).waitUntil(visible,20000).sendKeys("tradeDescription"); //Вбиваем дату окончания TODO

        //executeJavaScript("document.querySelector(\"[name='OrganizationDocumentTypeHidden']\").setAttribute(\"type\",\"\");");
        //$(By.cssSelector(tradeAddFile)).sendKeys("D:\\Market\\IpsumLorem.docx");
        $(By.cssSelector("input[data-url='https://223-zmo-servicing-api.rts-tender.ru/api/Upload']")).sendKeys("D:\\Market\\IpsumLorem.docx");  //Подгружаем файл

        $(By.xpath(XnameOfUploadFile)).waitUntil(visible,20000); //Ждём погрузки файла

        $(By.cssSelector(publishTrade)).waitUntil(visible,20000).click(); //Нажимаем опубликовать
    }
}

