package StepDefinitions;


import SetUp.ConfigSetup;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LogonSupplierZmo extends ConfigSetup{
    private WebDriver driver;

    public LogonSupplierZmo() {
        driver = ChromeInitialization.driver;
    }

    @Given("^Открываем https://223-zmo-trunk-ui.rts-tender.ru/. Поставщик$")
    public void open_zmo_mail_page() {
        driver.get(trunkMainPageZMO);
    }

    @And ("^Ждём загрузки страницы - ожидание исчезновения спиннера. Поставщик$")
    public void spinner_wait() {
        $(By.cssSelector(spinnerOnMainPage)).waitWhile(visible, 60000);
    }

    @Then ("^Переход на страницу авторизации через Вход. Поставщик$")
    public void go_authorization_page() {
        $(enterMainPageButton).click();
    }

    @And ("^Ждём загрузки страницы - ожидание исчезновения спиннера перед авторизацией. Поставщик$")
    public void spinner_wait_before_auth() {
        spinner_wait();
    }

    @Then ("^Переход на страницу авторизации Вход по 223ФЗ РТС-Тендер в разделе Для поставщика$")
    public void go_authorization_page_223_customer() {
        $(enter223SupplierButton).click();
    }

    @And ("^Выбираем сертификат. Поставщик$")
    public void wait_downloading_sertificate_page() {
        $(By.xpath(XnameOfSupZMO)).waitUntil(visible,20000).click();
    }
    @Then ("^Нажимаем кнопку Войти. Поставщик$")
    public void sertificate_choise() {
        $(By.cssSelector(enterCertificateButton)).click();
    }

    @And ("^Ждём загрузки страницы - ожидание исчезновения спиннера после авторизации. Поставщик$")
    public void spinner_wait_after_sertificate_choise() {
        spinner_wait();
    }

    @And("^Проверяем нужно ли разрешение на доступ. Поставщик$")
    public void need_acces_to_certificate() {
        if ($(By.cssSelector(grantAcces)).waitUntil(visible,2000).exists()) {
            $(By.cssSelector(grantAcces)).click();
        }
    }
    @Then ("^Отображаем наименование организации прописанное на странице. Поставщик$")
    public void show_organization_from_main_page() {
        System.out.println($(By.cssSelector(organizationNameOnMainPage)).getText());
    }
}
