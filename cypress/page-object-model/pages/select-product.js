import * as productLoc from '../locators/product-loc.json';

Cypress.Commands.add('backpackAdd', () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(productLoc.cartClick).click();
})

Cypress.Commands.add('lightAdd', () => {
    cy.get(".inventory_item").eq(2).find(".btn_inventory").click();
    cy.get(productLoc.cartClick).click();
})

Cypress.Commands.add('boltTShirtAdd', () => {
    cy.get(".inventory_item").eq(3).find(".btn_inventory").click();
    cy.get(productLoc.cartClick).click();
})

Cypress.Commands.add('jacketAdd', () => {
    cy.get(".inventory_item").eq(4).find(".btn_inventory").click();
    cy.get(productLoc.cartClick).click();
})

Cypress.Commands.add('onesieAdd', () => {
    cy.get(".inventory_item").eq(5).find(".btn_inventory").click();
    cy.get(productLoc.cartClick).click();
})

Cypress.Commands.add('tshirtRedAdd', () => {
    cy.get(".inventory_item").last().find(".btn_inventory").click();
    cy.get(productLoc.cartClick).click();
})