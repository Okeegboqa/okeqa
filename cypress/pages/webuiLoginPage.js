export class LoginPage
{
    enterUsername()
    {
        cy.get('[data-test="username"]').type('standard_user');
    }

    enterLockedOutUsername()
    {
        cy.get('[data-test="username"]').type('locked_out_user');
    }

    enterPerformanceUsername()
    {
        cy.get('[data-test="username"]').type('performance_glitch_user');
    }

    enterPassword()
    {
        cy.get('[data-test="password"]').type('secret_sauce');
    }

    enterIncorrectPassword()
    {
        cy.get('[data-test="password"]').type('secret_sauce1');
    }

    clickLogin()
    {
        cy.get('[data-test="login-button"]').click();
    }
}