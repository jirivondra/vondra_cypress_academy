describe('Operating with Cypress"', () => {
    beforeEach(()=>{
        cy.visit("https://tredgate.com/pmtool");
    })
    it('Login Test', () => {
        cy.visit("https://tredgate.com/pmtool")
        cy.get("#username").type("cypress_zima_2024")
        cy.get("#password").type("Zima2024Cypress")
        cy.get('.btn').click()
    });


});