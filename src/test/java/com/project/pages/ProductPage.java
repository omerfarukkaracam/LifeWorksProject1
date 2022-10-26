package com.project.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProductPage extends BasePage{

    @FindBy(xpath = "//*[contains(text(),'Products')]")
    public WebElement productTitle;

    @FindBy(id = "add-to-cart-sauce-labs-backpack")
    public WebElement selectBackpack;

    @FindBy(id = "add-to-cart-sauce-labs-fleece-jacket")
    public WebElement selectFleeceJacket;

    @FindBy(id = "add-to-cart-sauce-labs-bolt-t-shirt")
    public WebElement selectBlackTshirt;

    @FindBy(xpath = "//*[@id=\"shopping_cart_container\"]/a/span")
    public WebElement shoppingCard;

    @FindBy(id = "remove-sauce-labs-bolt-t-shirt")
    public WebElement removeTshirt;

    @FindBy(id = "checkout")
    public WebElement checkout;

    @FindBy(id = "first-name")
    public WebElement firstName;

    @FindBy(id = "last-name")
    public WebElement lastName;

    @FindBy(id = "postal-code")
    public WebElement postcode;

    @FindBy(id = "continue")
    public WebElement continueButton;

    @FindBy(id = "finish")
    public WebElement finishButton;

    @FindBy(xpath = "//*[contains(text(),'THANK YOU')]")
    public WebElement completeMassageText;
}
