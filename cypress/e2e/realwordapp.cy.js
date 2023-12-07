/// <reference types = "cypress" />
import { LoginPage } from "../pages/pagelogin";
import { TransactionPage } from "../pages/transaction";
import { newTransactionPage } from "../pages/newaccount";

describe.skip('Login Validation', () => {
    const login = new LoginPage();
    const transaction = new TransactionPage();
    const newTransaction = new newTransactionPage();


    it('Check Network Request Status', () => {
        // Visit URL
        cy.visit('http://localhost:3000/signin');

        // Set Up Interception for Get Request
        cy.intercept('GET', 'http://localhost:3001/transactions/public').as('getTransactions')

        // Username and Login
        login.setUserName();
        login.setPassword();
        login.getLogin();

        // Intercept Network
        /*cy.wait('@getTransactions').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })*/

        // Create New Transaction
        newTransaction.getTransactionPage();
        newTransaction.getContact();
        newTransaction.getAmount();
        newTransaction.getAddNote();
        newTransaction.getRequest();
    });

    it('Interact with element', () => {
        // Visit URL
        cy.visit('http://localhost:3000/signin');

        // Enter Username and Login
        login.setUserName();
        login.setPassword();
        login.getLogin();

        // Create New Transaction
        newTransaction.getTransactionPage();
        newTransaction.getContact();
        newTransaction.getAmount();
        newTransaction.getAddNote();
        newTransaction.getRequest();

        // Validate Transaction is successful
        cy.contains('Okechukwu Egbo');

        // Return To Transaction Page
        newTransaction.getReturnToTransactionPage();
    });
    // Scroll Through Transaction Page
    //...cy.get('[data-test="transaction-sender-deOv2EAjW8x"]').scrollIntoView()

    it('Filter Transaction by Date', () => {
        // Visit URL
        cy.visit('http://localhost:3000/signin');

        // Enter Username and Login
        login.setUserName();
        login.setPassword();
        login.getLogin();

        // Filter Trnasaction By Date Range
        cy.get('[data-test="nav-personal-tab"]').click();
        cy.get('[data-test="transaction-list-filter-date-range-button"]').click({ force: true });
        cy.get('[data-date="2023-10-31"]').click();
        cy.get('[data-date="2023-11-02"]').eq(0).click();

        it('Filter TRansaction By Amount', () => {

            // Click on Amount Btn
            cy.get('[data-test="transaction-list-filter-amount-range-button"]')
                .should('be.visible')
                .click({ force: true });

            //To select the range 0 to 560
            cy.get('[data-test="transaction-list-filter-amount-range-slider"]').click()
            cy.get('[data-index="0"]')   //.click({ force: true });
                .invoke('val', 0);
            cy.get('[data-index="1"]')
                .invoke('val', 560);
            //cy.get('[data-test="transaction-sender-mEYl_ZSc5Qqe"]').should('exist');
        });

    });

});