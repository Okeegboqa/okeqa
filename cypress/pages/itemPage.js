export class AddItemToCart
{
    selectItem()
    {
        // Add Item to Cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    }

    openCartToCheck()
    {
        // Open Cart
        cy.get('.shopping_cart_link').click();
    }

    checkItemInCart()
    {
        // Check item in cart
        cy.get('.inventory_item_name')
          .should('have.text', 'Sauce Labs Backpack');
    }

    checkItemPriceInCart()
    {
        // Check item in cart
        cy.get('inventory_item_price')
          .should('have.text', '');
    }

    clickCheckout()
    {
        // Click on Checkout Button
        cy.get('[data-test="checkout"]').click();
    }

    isheckoutEnabled()
    {
        // Click on Checkout Button
        cy.get('[data-test="checkout"]').should('be.enabled');
    }
        
    enterCustomerFirstName()
    {
    // Enter firstname to checkout
    cy.get('[data-test="firstName"]').type('John');
    }

    enterCustomerLastName()
    {
    //Enter lastname to checkout
    cy.get('[data-test="lastName"]').type('Doe');
    }
    
    enterPostalCode()
    {
    // Enter postcode
    cy.get('[data-test="postalCode"]').type('100253');
    }

    clickOnContinueBtn()
    {
    // Click on Continue Btn
    cy.get('[data-test="continue"]').click();
    }

    clickFinishBtn()
    {
    // Click on Finish Btn
    cy.get('[data-test="finish"]').click();
    }

    checkThankYouMessage()
    {
    // Verify that thank you page is displayed
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }

    goToHomePage()
    {
         // Click on btn to go to homepage
         cy.get('[data-test="back-to-products"]').click();
    }
}