export class newTransactionPage
{
    getTransactionPage()
    {
        cy.get('[data-test="nav-top-new-transaction"]').click();
    }

    getContact()
    {
        cy.get('[data-test="user-list-item-cl9-CYixB"]').click();
    }

    getAmount()
    {
        cy.get('#amount').type('100');
    }

    getAddNote()
    {
        cy.get('#transaction-create-description-input').type('This is for test');
    }

    getRequest()
    {
        cy.get('[data-test="transaction-create-submit-request"]').click();
    }

    getReturnToTransactionPage()
    {
        cy.get('[data-test="new-transaction-return-to-transactions"]').click();
    }
}