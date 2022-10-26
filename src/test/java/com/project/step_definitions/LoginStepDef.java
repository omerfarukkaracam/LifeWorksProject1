package com.project.step_definitions;

import com.project.pages.LoginPage;
import com.project.pages.ProductPage;
import com.project.utilities.ConfigurationReader;
import com.project.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class LoginStepDef {

    ProductPage productPage = new ProductPage();
    LoginPage loginpage= new LoginPage();

    @Given("User open soucedemo page")
    public void openWebPage(){
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @And("User enter credentials")
    public void userEnterCredentials() {

        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");
        loginpage.login(username,password);
    }


    @Then("user verify product page")
    public void userVerifyProductPage() {


        Assert.assertEquals("PRODUCTS",productPage.productTitle.getText());
    }

    @And("User select three products")
    public void userSelectThreeProducts() {

        productPage.selectBackpack.click();
        productPage.selectBlackTshirt.click();
        productPage.selectFleeceJacket.click();


    }

    @And("user goes to basket and buy two products")
    public void userGoesToBasketAndBuyTwoProducts() {
        productPage.shoppingCard.click();
        productPage.removeTshirt.click();
        productPage.checkout.click();
    }

    @And("user fill checkout information with {string},{string},{string}")
    public void userFillCheckoutInformationWith(String arg0, String arg1, String arg2) {
        productPage.firstName.sendKeys(arg0);
        productPage.lastName.sendKeys(arg1);
        productPage.postcode.sendKeys(arg2);
        productPage.continueButton.click();

    }

    @And("User finish the order")
    public void userFinishTheOrder() {
        productPage.finishButton.click();
    }

    @Then("verify checkout complete with {string}")
    public void verifyCheckoutCompleteWith(String thankYou) {

        Assert.assertEquals(thankYou,productPage.completeMassageText.getText());
    }

    @And("user fill checkout information {string},{string},{string}")
    public void userFillCheckoutInformations(String name, String surname, String zipcode) {

        productPage.firstName.sendKeys(name);
        productPage.lastName.sendKeys(surname);
        productPage.postcode.sendKeys(zipcode);
        productPage.continueButton.click();
    }

    @And("user goes to basket and buy products")
    public void userGoesToBasketAndBuyProducts() {
        productPage.selectBackpack.click();
        productPage.selectBlackTshirt.click();
        productPage.selectFleeceJacket.click();
        productPage.shoppingCard.click();
        productPage.checkout.click();
    }
}
