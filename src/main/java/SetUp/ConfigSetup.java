package SetUp;

public class ConfigSetup {
    protected String trunkMainPageZMO = "https://223-zmo-stable-ui.rts-tender.ru/";
    //public String dateFrom="13.06.2019";
    //public String dateTo = "13.06.2019";
    protected String XnameOfZakZMO = "//*[contains(text(),'Заказчик ЗМО 13.11.2017')]";
    protected String enterCertificateButton = "input[id='submitSignin']";
    protected String spinnerOnMainPage = "div[class='widgetLoadingPanel']";
    protected String enterMainPageButton = "a[id='loginLink']";
    protected String enter223CustomerButton = "a[name='Rts223Customer']";
    protected String grantAcces = "input[name='submit.Grant']";
    protected String organizationNameOnMainPage = "div[id='ellipsis-multiline']";
    //protected String organizationInnOnMainPage = "div[id='ellipsis-multiline']";
    protected String XnameOfSupZMO = "//*[contains(text(),'Поставщик ЗМО 13.11.2017')]";
    protected String enter223SupplierButton = "a[name='Rts223Participant']";

}
