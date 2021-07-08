package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement bySellTab;

    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCarsLink;



    public void mouseHoverOnBuySellTab(){

        mouseHoverToElement(bySellTab);
        log.info("Mouse hover on By+Sell tab  element " + bySellTab.toString());
    }

    public void mouseHoverAndClickOnSearchCarsLinks(){

        mouseHoverToElementAndClick(searchCarsLink);
        log.info("Mouse hover and click on Search Cars element "+searchCarsLink.toString());

    }




}
