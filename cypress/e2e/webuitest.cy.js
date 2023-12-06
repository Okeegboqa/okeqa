/// <reference types = "cypress" />

import { LoginPage } from "../pages/webuiLoginPage";
import { LogoutAction } from "../pages/webuiLogout";

describe('Login Validation', () => {
    const login = new LoginPage();
    const logout = new LogoutAction()

    beforeEach('Verify Successful Login', () => {
        // Visit URL
        cy.visit('https://www.saucedemo.com/');

        // Username and Login
        login.enterUsername();
        login.enterPassword();
        login.clickLogin();

        // Check page URL is correct after login
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        // Check that logout element is available in the sidebar
        logout.clickHandBurger();
        logout.locateLogoutButton();
    });

    it('Verify that user logout and redirect to login page', () => {
        // Perform logout
        logout.clickLogoutButton();

        // Check that page URL is changed to login page
        cy.url().should('eq', 'https://www.saucedemo.com/');

        // Check that the logo is present on login page
        logout.locateLogoOnLoginPage();
    });

    it('Valid user unsuccessful login', () => {
        // Visit URL
        cy.visit('https://www.saucedemo.com/');

        // Username and Login
        login.enterUsername();
        login.enterIncorrectPassword();
        login.clickLogin();

        // Check page URL is correct after login
        cy.contains('Epic sadface: Username and password do not match any user in this service')
          .should('be.visible');
        //cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });

    it('Verify that lockout out user cannot login with valid credentials', () => {
        // Visit URL
        cy.visit('https://www.saucedemo.com/');

        // Username and Login
        login.enterLockedOutUsername();
        login.enterPassword();
        login.clickLogin();

        // Check page URL is correct after login
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
          .should('be.visible');
    });

    it('Verify that a valid user user can log-in with the valid credentials, but with long timeout', () => {
        
        // Visit URL
        cy.visit('https://www.saucedemo.com/');

        // Username and Login
        login.enterPerformanceUsername();
        login.enterPassword();

        // Click on login and impliment timeout after login is clicked
        login.clickLogin({ timeout: 5000 });

        // Check page URL is correct after login
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    });

    it('Verify that a valid user can login when screen width is less than 1060px', () => {
        // Set the viewport width to less than 1060px
        cy.viewport(1024, 768);

        // Visit URL
        cy.visit('https://www.saucedemo.com/');

        // Username and Login
        login.enterUsername();
        login.enterPassword();
        login.clickLogin();

        // Check page URL is correct after login
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    });
});