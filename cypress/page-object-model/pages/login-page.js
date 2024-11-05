import * as loginLoc from '../locators/login-loc.json';

Cypress.Commands.add('basicLogin', (username, password) =>{
    cy.get(loginLoc.usernameInput).type(username);
        cy.wait(2000);
        cy.get(loginLoc.passwordInput).type(password);
        cy.wait(2000);
        cy.get(loginLoc.loginClick).click();
        cy.wait(2000);
})