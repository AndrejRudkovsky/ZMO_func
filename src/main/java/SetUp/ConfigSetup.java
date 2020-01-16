package SetUp;

public class ConfigSetup {
    protected String trunkMainPageZMO = "https://223-zmo-stable-ui.rts-tender.ru/";
    //public String dateFrom="13.06.2019";
    //public String dateTo = "13.06.2019";

    //-------Login_customer
    protected String XnameOfZakZMO = "//*[contains(text(),'Заказчик ЗМО 13.11.2017')]";
    protected String enterCertificateButton = "input[id='submitSignin']";
    protected String spinnerOnMainPage = "div[class='widgetLoadingPanel']";
    protected String enterMainPageButton = "a[id='loginLink']";
    protected String enter223CustomerButton = "a[name='Rts223Customer']";
    protected String grantAcces = "input[name='submit.Grant']";
    protected String organizationNameOnMainPage = "div[id='ellipsis-multiline']";
    //-------Create_trade
    protected String createTradeButtonOnMainPage = "a[data-marketaction='market_create_action']";
    //-------Create_trade_page
    protected String IntermidateTrade = "input[id='IsImmediate']";
    protected String fzType44p4 = "//input[@name='FzTypeBtnGroup'][@value='15']";
    protected String fzType44p5 = "//input[@name='FzTypeBtnGroup'][@value='20']";
    protected String fzType223 = "//input[@name='FzTypeBtnGroup'][@value='5']";
    protected String priceForEvenObject = "input[id='IsManualEnterPriceForEachProductCheckBox']";
    protected String tradeName = "textarea[id='TradeName']";
    protected String addPosition = "div[data-bind='click: pageVM.showAddProductModal']";
    protected String positionName = "input[data-bind='value: pageVM.Product.Name']";




    //protected String organizationInnOnMainPage = "div[id='ellipsis-multiline']";
    protected String XnameOfSupZMO = "//*[contains(text(),'Поставщик ЗМО 13.11.2017')]";
    protected String enter223SupplierButton = "a[name='Rts223Participant']";

}
