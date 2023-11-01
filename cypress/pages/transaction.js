export class TransactionPage
{
    getTransactionPage()
    {
        cy.get('.MuiTab-wrapper').eq(1).click();
    }

    createTransaction()
    {
        cy.get('.MuiButton-label').eq(2).click();
    }

    
}