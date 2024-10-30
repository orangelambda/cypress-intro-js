import { LOGIN_CREDENTIALS } from "../page-object-model/data/constants";
import * as login_data from "../page-object-model/data/login-data.json";

describe ("Sauce Demo test suite", () => {

    beforeEach(() => {
        cy.log("Starting test...");
        cy.visit("https://www.saucedemo.com/v1/");
        cy.wait(2000);
    });

    afterEach(() => {
        cy.wait(2000);
        cy.log("Ending test...");
    });

    it("This is my first Cypress test - prueba js", () => {
        cy.basicLogin(LOGIN_CREDENTIALS.USERNAME, LOGIN_CREDENTIALS.PASSWORD);
        cy.get(".product_label").should("have.text", "Products");
    });

    it.only("This is my second Cypress test - prueba json", () => {
        cy.basicLogin(login_data.username, login_data.password);
        cy.get(".product_label").should("have.text", "Products");
        cy.wait(2000);
        cy.get("h3[data-test='error']").should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });


});