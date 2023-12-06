/// <reference types = "cypress" />
import { LoginPage } from "../pages/webuiLoginPage";
import { AddItemToCart } from "../pages/itemPage";


describe('Login Validation', () => {
    // Declaring variables
    const login = new LoginPage();
    const item = new AddItemToCart();
    const baseUrl = Cypress.config().baseUrl;

    beforeEach('Verify Successful Login', () => {
        // Visit URL
        cy.visit(baseUrl);

        // Enter valid username and valid password
        login.enterUsername();
        login.enterPassword();

        // Click on the login btn
        login.clickLogin();

        // Check page URL is correct after login
        cy.url().should('eq', baseUrl + 'inventory.html');
    });

    it('Verify user can add item to cart and purchase item', () => {
        // Add an item to Cart
        item.selectItem();

        // Open Cart
        item.openCartToCheck();

        // Check if item is in cart
        item.checkItemInCart();

        // Check item price is correct
        item.checkItemPriceInCart();
        
        // Checck that checkout button is enabled
        item.isheckoutEnabled();

        // Click on Checkout Button
        item.clickCheckout();

        // Input firstname 
        item.enterCustomerFirstName();

        // Input lastname
        item.enterCustomerLastName();

        // Enter postal code
        item.enterPostalCode();

        // click on continue button
        item.clickOnContinueBtn();

        // click on finish button
        item.clickFinishBtn();

        // Check that thank you page is displayed
        item.checkThankYouMessage();

        // navigate back to homepage
        item.goToHomePage();

    });
    
});
