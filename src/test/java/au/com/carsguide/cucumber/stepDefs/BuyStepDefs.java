package au.com.carsguide.cucumber.stepDefs;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyStepDefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on by\\+sell tab$")
    public void iMouseHoverOnBySellTab() {

        new HomePage().mouseHoverOnBuySellTab();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {

        new HomePage().mouseHoverAndClickOnSearchCarsLinks();
    }

    @Then("^I navigate to \"([^\"]*)\"$")
    public void iNavigateTo(String expectedPageNavigationText) {

        Assert.assertEquals(expectedPageNavigationText, new NewAndUsedCarSearchPage().getNewAndUsedCarSearchPageNavigationText());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {

        new NewAndUsedCarSearchPage().selectCarMakeFromDropDownMenu(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {

        new NewAndUsedCarSearchPage().selectCarModelFromDropDownMenu(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {

        new NewAndUsedCarSearchPage().selectCarLocationFromDropDownMenu(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {

        new NewAndUsedCarSearchPage().selectCarPriceFromDropDownMenu(price);
    }

    @And("^I click on Find My Next Car Tab$")
    public void iClickOnFindMyNextCarTab() {

        new NewAndUsedCarSearchPage().clickOnFindMyNextCarButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in result$")
    public void iShouldSeeTheMakeInResult(String make) {

        Assert.assertTrue(make,new NewAndUsedCarSearchPage().getSearchTitleText().contains(make));

    }


}
