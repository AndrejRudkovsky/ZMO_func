package StepDefinitions;

import com.codeborne.selenide.WebDriverRunner;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.File;

public class ChromeInitialization {

    protected static WebDriver driver;

    @Before
    public void openChrome() {

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.setBinary(new File("src/test/resources/drivers/chromium/chrome.exe"));
        options.addExtensions(new File("src/test/resources/drivers/CryptoProExt.crx"));
        //options.setExperimentalOption("prefs", chromePrefs);
        options.addArguments("--start-maximized");

        driver = new ChromeDriver(options);

        WebDriverRunner.setWebDriver(driver);





        /*System.setProperty("webdriver.chrome.driver", "C://webdrivers//chromedriver_v79.exe");

        ChromeOptions options = new ChromeOptions();*/


        // Proxy proxy = new Proxy();
        // proxy.setHttpProxy("myhttpproxy:3337");
        // options.setCapability("proxy", proxy);
        // options.addArguments("--headless");
        // options.addArguments("--disable-gpu");
         //options.setAcceptInsecureCerts(true);
        // options.addArguments("--allow-insecure-localhost");
        // options.addArguments("--lang=fr-CA");
        /*options.addArguments("--start-maximized");
        driver = new ChromeDriver(options);

        WebDriverRunner.setWebDriver(driver);*/
    }

    /*@After
    public void closeChrome() {
        driver.close();
    }*/

}
