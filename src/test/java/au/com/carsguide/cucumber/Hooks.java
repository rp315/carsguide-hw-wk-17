package au.com.carsguide.cucumber;

import au.com.carsguide.basePage.BasePage;
import au.com.carsguide.propertyReader.PropertyReader;
import au.com.carsguide.utility.Utility;
import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends BasePage {

    @Before
    public void openBrowser(){

        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("Homework 17","Rajendra Patel");
    }

    @After
    public void tearDown(Scenario scenario){

        if (scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver,scenario.getName().replace(" ","_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        closeBrowser();
    }

}
