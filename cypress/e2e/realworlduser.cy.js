/// <reference types = "cypress" />
import { LoginPage } from "../pages/pagelogin";
import { TransactionPage } from "../pages/transaction";
import { newTransactionPage } from "../pages/newaccount";

describe.skip('Login Validation', () => {
    const login = new LoginPage();
    const transaction = new TransactionPage();
    const newTransaction = new newTransactionPage();

    it('Render User Settings Form', () => {
        // Visit URL
        cy.visit('http://localhost:3000/signin');

        // Enter Username and Login
        login.setUserName();
        login.setPassword();
        login.getLogin();

        // User Settings Form
        cy.get('[data-test="sidenav-user-settings"]').click();

    });

    it('Display User Settings Form Error', () => {
        // Visit URL
        cy.visit('http://localhost:3000/signin');

        // Enter Username and Login
        login.setUserName();
        login.setPassword();
        login.getLogin();

        // User Settings Form
        cy.get('[data-test="sidenav-user-settings"]').click();


        cy.get('[data-test="user-settings-email-input"]').type('oke123');
        cy.get('[data-test="user-settings-phoneNumber-input"]').type('bghgd126364');
        cy.contains('Phone number is not valid')
    });

    it('Upddate User Information', () => {

        // Visit URL
        cy.visit('http://localhost:3000/signin');

        // Enter Username and Login
        login.setUserName();
        login.setPassword();
        login.getLogin();

        // User Settings Form
        cy.get('[data-test="sidenav-user-settings"]').click();

        // Update With Valid Info
        cy.get('[data-test="user-settings-firstName-input"]').clear().type('Oke');
        cy.get('[data-test="user-settings-lastName-input"]').clear().type('DEgbo');
        cy.get('[data-test="user-settings-email-input"]').clear().type('oke@gmail.com');
        cy.get('[data-test="user-settings-phoneNumber-input"]').clear().type('08176253736');
        cy.get('[data-test="user-settings-submit"]').click();
    });

});