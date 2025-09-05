

describe('API Display tests', () => {
    it('Check Login API', () => {
        cy.visit('http://localhost:3001')
        cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"))
        cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"))
        cy.get('[data-testid="log_in"]').click()
    });

    it('Basic Intercept Test', () => {
        // ? Zapínáme odchytávání requestů (API - xhr), kterým url končí /auth/login a uloží se do aliasu "login_api"
        cy.intercept("/auth/login").as('login_api')
        cy.visit('http://localhost:3001')
        cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"))
        cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"))
        cy.get('[data-testid="log_in"]').click()
    });
    it.only('Wait for login', () => {
        cy.intercept("/auth/login").as('login_api')
        cy.visit('http://localhost:3001')
        cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"))
        cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"))
        cy.get('[data-testid="log_in"]').click()
        // ? Počkáme na to, až se request login_api dokončí (přijde response)
        cy.wait('@login_api')
    });
});