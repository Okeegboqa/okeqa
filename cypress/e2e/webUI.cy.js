/// <reference types = "cypress" />

// Importing Classes
import { LoginPage } from "../pages/webuiLoginPage";
import { LogoutAction } from "../pages/webuiLogout";

// Declaring variables
const baseUrl = Cypress.config().baseUrl;
const login = new LoginPage();
const logout = new LogoutAction();


//describe('Valid user login test', () => {

    it('Verify Successful Login with valid user', () => {
        // Visit application URL
        cy.visit(baseUrl);

        // Enter valid username and password 
        login.enterUsername();
        login.enterPassword();

        // Click on Login Btn
        login.clickLogin();

        // Check page URL is correct after login
        cy.url().should('eq', baseUrl + 'inventory.html');

        // Check that logout element is available in the sidebar
        logout.clickHandBurger();
        logout.locateLogoutButton();
    });
//});

//describe('Valid user logout test', () => {

    it('Verify that valid user can logout successfully', () => {
        // Visit application URL
        cy.visit(baseUrl);

        // Enter valid username and password 
        login.enterUsername();
        login.enterPassword();

        // Click on Login Btn
        login.clickLogin();

        // Check page URL is correct after login
        cy.url().should('eq', baseUrl + 'inventory.html');

        // Check that logout element is available in the sidebar
        logout.clickHandBurger();
        logout.locateLogoutButton();

        // Click logout btn
        logout.clickLogoutButton();

        // Check that page URL is changed to login page
        cy.url().should('eq', baseUrl);

        // Check that the logo is present on login page
        logout.locateLogoOnLoginPage();
    });
//});

//describe('Login Validation Tests with negative scenarios', () => {

    it('Valid user unsuccessful login', () => {
        // Visit URL
        cy.visit(baseUrl);

        // Enter valid username and invalid password 
        login.enterUsername();
        login.enterIncorrectPassword();

        // Click on Login Btn
        login.clickLogin();

        // Check page URL is correct after login
        cy.contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible');
    });

    it('Verify that lockout out user cannot login with valid credentials', () => {
        // Visit URL
        cy.visit(baseUrl);

        // Enter valid username and valid password
        login.enterLockedOutUsername();
        login.enterPassword();

        // Click on login btn
        login.clickLogin();

        // Check page URL is correct after login
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
            .should('be.visible');
    });

    it('Verify that a valid user user can log-in with the valid credentials, but with long timeout', () => {

        // Visit URL
        cy.visit(baseUrl);

        // Enter valid username and valid password
        login.enterPerformanceUsername();
        login.enterPassword();

        // Click on login and impliment timeout after login is clicked
        login.clickLogin({ timeout: 5000 });

        // Check page URL is correct after login
        cy.url().should('eq', baseUrl + 'inventory.html');

    });
//})

it.skip('Verify that a valid user can login when screen width is less than 1060px', () => {
    // Set the viewport width to less than 1060px
    cy.viewport(1024, 768);

    // Visit URL
    cy.visit(baseUrl);

    // Enter valid username and valid password
    login.enterUsername();
    login.enterPassword();

    // Click on login btn
    login.clickLogin();

    // Check page URL is correct after login
    cy.url().should('eq', baseUrl + 'inventory.html');

});

