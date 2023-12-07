describe.skip('template spec', () => {
  it('passes', () => {

    // Visit URL
    cy.visit('http://localhost:3000/signin');

    // Enter Username and Password
    cy.get('#username').type('Dennisoke');
    cy.get('#password').type('Dennisme1*');

    // Click on Login Btn
    cy.get('[data-test="signin-submit"]').click();

    // Click Next to Set Up account
    cy.get('[data-test="user-onboarding-next"] > .MuiButton-label').click();

    // Create Bank Account

    // Enter Bank Name
    cy.get('#bankaccount-bankName-input').type('Big Bank');

    // Enter Routing Number
    cy.get('#bankaccount-routingNumber-input').type('123452323');

    // Enter Account Number
    cy.get('#bankaccount-accountNumber-input').type('9876543210');
    
    // Click on Submit
    cy.get('[data-test="bankaccount-submit"]').click();

    // Click on Done
    cy.get('[data-test="user-onboarding-next"] > .MuiButton-label').click();
  })
})

