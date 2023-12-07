export class LogoutAction
{
    clickHandBurger()
    {
        cy.get('#react-burger-menu-btn').click();

    }

    locateLogoutButton()
    {
        cy.get('#logout_sidebar_link').should('be.visible');
    }

    clickLogoutButton()
    {
        cy.get('#logout_sidebar_link')
          .should('be.visible').click();
    }

    locateLogoOnLoginPage()
    {
        cy.contains('Swag Labs').should('be.visible');
    }
}