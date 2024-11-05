import * as productLoc from '../locators/product-loc.json';
import * as infoLoc from '../locators/information-loc.json';

Cypress.Commands.add('addProduct', (productName) => {
    cy.get(productLoc.inventoryItem).contains(productName).parents(productLoc.inventoryItem).find(productLoc.addButtons).click();
    cy.get(productLoc.cartClick).click();
})

Cypress.Commands.add('payProduct', (name, surname, postal) => {
    cy.get(productLoc.checkoutClick).click();
    cy.get(infoLoc.nameInput).type(name);
    cy.get(infoLoc.surnameInput).type(surname);
    cy.get(infoLoc.postalInput).type(postal);
    cy.wait(2000);
    cy.get(productLoc.continueClick).click();
    cy.wait(2000);
    cy.get(productLoc.finishClick).click();
    cy.get(productLoc.completeHeader).should("have.text", "THANK YOU FOR YOUR ORDER");
})