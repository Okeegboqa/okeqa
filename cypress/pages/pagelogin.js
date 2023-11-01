export class LoginPage
{
    setUserName()
    {
        cy.get('#username').type('Dennisoke');
    }

    setPassword()
    {
        cy.get('#password').type('Dennisme1*');
    }

    getLogin()
    {
        cy.get('[data-test="signin-submit"]').click();
    }
}