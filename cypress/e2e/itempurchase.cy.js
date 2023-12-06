/// <reference types = "cypress" />
import { LoginPage } from "../pages/webuiLoginPage";
import { LogoutAction } from "../pages/webuiLogout";
import { AddItemToCart } from "../pages/itemPage";


describe('Login Validation', () => {
    const login = new LoginPage();
    const logout = new LogoutAction();
    const item = new AddItemToCart();

    beforeEach('Verify Successful Login', () => {
        // Visit URL
        cy.visit('https://www.saucedemo.com/');

        // Username and Login
        login.enterUsername();
        login.enterPassword();
        login.clickLogin();

        // Check page URL is correct after login
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });

    it('Verify user can add item to cart and purchase item', () => {
        // Add Item to Cart
        item.selectItem();

        // Open Cart
        item.openCartToCheck();

        // Check item in cart
        item.checkItemInCart();

        // Check item price
        //item.checkItemPriceInCart();
        
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
