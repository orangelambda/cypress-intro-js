import { LOGIN_CREDENTIALS } from "../page-object-model/data/constants";

describe ("Product POM Test", () => {

    beforeEach(() => {
        cy.log("Starting test...");
        cy.visit("https://www.saucedemo.com/v1/");
        cy.wait(2000);
    })

    afterEach(() => {
        cy.wait(2000);
        cy.log("Ending test...");
    });

    it ("Product purchase", () => {
        cy.basicLogin(LOGIN_CREDENTIALS.USERNAME, LOGIN_CREDENTIALS.PASSWORD);
        cy.lightAdd();
    })
});