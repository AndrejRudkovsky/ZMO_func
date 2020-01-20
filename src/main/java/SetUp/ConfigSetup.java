package SetUp;

public class ConfigSetup {
    protected String trunkMainPageZMO = "https://223-zmo-servicing-ui.rts-tender.ru/";
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
    protected String financeSourceBudget = "//input[@name='FinanceSourceTypeBtnGroup'][@value='5']";
    protected String financeSourceNonBudget = "//input[@name='FinanceSourceTypeBtnGroup'][@value='10']";
    protected String financeSource = "//input[@name='FinanceSourceTypeBtnGroup'][@value='1']";


    protected String tradeName = "textarea[id='TradeName']";
        //Create_trade_position -----------------------------------
    protected String addPosition = "div[data-bind='click: pageVM.showAddProductModal']";
    //TODO <span data-bind="click: pageVM.addProduct, visible: !pageVM.IsProductEditMode()">Добавление продукта</span>  wait for visible
    protected String positionName = "input[data-bind='value: pageVM.Product.Name']";
    protected String positionOKPD2 = "input[id='ProductClassificatorCode']";
    //TODO 10.51.52.121 write
    protected String positionOKEI = "input[id='okeiCode']";

    //TODO Гектолитр чистого (100 %) спирта + Key.DOWN + Enter
    protected String positionQuantity = "input[data-bind='value: pageVM.Product.Quantity']";
    protected String positionPrice = "input[data-bind='value: pageVM.Product.Price']";
    protected String positionAddButton = "div[data-bind='click: pageVM.addProduct, visible: !pageVM.IsProductEditMode()']";
    protected String positionClearButton = "div[data-bind='click: pageVM.clearProductForm']";
    //TODO <span data-bind="click: pageVM.addProduct, visible: !pageVM.IsProductEditMode()">Добавление продукта</span>  wait for NOT visible
        // ---------------------------------------------------------
    protected String autoFillContactInfo = "button[data-bind='click: pageVM.FillContactData']";
    protected String contactInfo = "input[id='ContactInfo_Fio']";  //autoFillContactInfo
    protected String phoneNumber = "input[id='ContactInfo_ContactPhone']";  //autoFillContactInfo
    protected String customerRegion = "select[data-bind=\"options: pageVM.kladrRegions, optionsText: 'Name', optionsValue: 'Id', value: pageVM.KladrRegionCode\"]";  //autoFillContactInfo
    protected String deliveryPlace = "textarea[id='DeliveryPlaceSuggestion']";
    protected String deliveryTerms = "textarea[id='DeliveryTerms']";
    protected String paymentConditions = "textarea[id='ConditionsOfPayment']";
    protected String tradeEndDate = "input[data-bind='value: pageVM.fillingAppEndDate']"; //можно вводить 6 чисел - текущая дата, полный формат DD.MM.YYYY HH.MM
    protected String dealEndDate = "input[data-bind='value: pageVM.planedDealSignDate']"; //выставляется автоматом
    protected String tradeDescription = "textarea[id='Description']";
    protected String tradeAddFile = "input[name='OrganizationDocumentTypeHidden']";  //("D:\\Market\\IpsumLorem.docx")  JS=document.querySelector("[name='OrganizationDocumentTypeHidden']").setAttribute("type","");

    protected String XnameOfUploadFile = "//a[contains(text(),'IpsumLorem.docx')][@class='link-red']";

    protected String publishTrade = "button[data-bind='click: pageVM.publish']";







    //protected String organizationInnOnMainPage = "div[id='ellipsis-multiline']";
    protected String XnameOfSupZMO = "//*[contains(text(),'Поставщик ЗМО 13.11.2017')]";
    protected String enter223SupplierButton = "a[name='Rts223Participant']";

}
