/// <reference types="Cypress" />

describe("Product tests", () => {

    beforeEach(() => {
        cy.log("Starting test...");
        cy.visit("https://www.saucedemo.com/v1/");
        cy.wait(2000);
    });

    afterEach(() => {
        cy.wait(2000);
        cy.log("Ending test...");
    });

    //it("Purchase t-shirt", () => {
      //  cy.get("#user-name").type("standard_user");
        //cy.get("#password").type("secret_sauce");
        //cy.get("#login-button").click();
        //cy.get(".product_label").should("have.text", "Products").and("exist");
    //})

    it("Logout", () => {
        cy.get("#user-name").type("standard_user");
        cy.wait(2000);
        cy.get("#password").type("secret_sauce");
        cy.wait(2000);
        cy.get("#login-button").click();
        cy.wait(2000);
        cy.get(".bm-burger-button").click();
        cy.wait(2000);
        cy.get("#logout_sidebar_link").click();
        cy.wait(2000);
    })

    it.only("Purchase light", () => {
        cy.get("#user-name").type("standard_user");
        cy.wait(2000);
        cy.get("#password").type("secret_sauce");
        cy.wait(2000);
        cy.get("#login-button").click();
        cy.wait(2000);
        //cy.get(".inventory_item").eq(2).find(".btn_inventory").click();
        cy.get(".inventory_item").contains("Bike Light").parents(".inventory_item").find(".btn_inventory").click();
        cy.wait(2000);
        cy.get(".shopping_cart_container").click();
        cy.wait(2000);
        cy.get(".checkout_button").click();
        cy.wait(2000);
        cy.get("#first-name").type("Raymundo");
        cy.get("#last-name").type("Pimienta");
        cy.get("#postal-code").type("99999");
        cy.wait(2000);
        cy.get(".cart_button").click();
        cy.wait(2000);
        cy.get(".cart_button").click();
        cy.wait(2000);
        cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
    })
});