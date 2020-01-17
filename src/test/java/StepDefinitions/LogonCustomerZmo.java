package StepDefinitions;

import SetUp.ConfigSetup;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import static com.codeborne.selenide.Condition.visible;
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
        $(By.cssSelector(createTradeButtonOnMainPage)).waitUntil(visible,20000).click();
        $(By.cssSelector(deliveryTerms)).waitUntil(visible,20000).sendKeys("привет");
        $(By.cssSelector(tradeAddFile)).uploadFile(new File("D:/Market/IpsumLorem.docx"));
    }
}
