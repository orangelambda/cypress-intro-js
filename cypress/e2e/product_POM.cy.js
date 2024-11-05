import * as constants from "../page-object-model/data/constants";

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
        cy.basicLogin(constants.LOGIN_CREDENTIALS.USERNAME, constants.LOGIN_CREDENTIALS.PASSWORD);
        cy.addProduct(constants.PRODUCT_NAMES.BACKPACK);
        cy.payProduct(constants.INFO_CREDENTIALS.NAME, constants.INFO_CREDENTIALS.SURNAME, constants.INFO_CREDENTIALS.POSTAL_CODE);
    })
});