import * as loginLoc from '../locators/login-loc.json';
//import * as productLoc from '../locators/product-loc.json';

Cypress.Commands.add('basicLogin', (username, password) =>{
    cy.get(loginLoc.usernameInput).type(username);
        cy.wait(2000);
        cy.get(loginLoc.passwordInput).type(password);
        cy.wait(2000);
        cy.get(loginLoc.loginClick).click();
        cy.wait(2000);
})

Cypress.Commands.add('lightAdd', () => {
    cy.get(".inventory_item").eq(2).find(".btn_inventory").click();
    //cy.get(loginLoc.cartClick).click();
    cy.get(".shopping_cart_container").click();
})