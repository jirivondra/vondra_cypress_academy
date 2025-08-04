describe('Lost passwords tests', () => {
    it('Lost password test', () => {
        cy.visit("https://tredgate.com/pmtool")
        cy.get("#forget_password").click({force: true}).then(()=>{
            cy.get('[name="username"]').type("cypress_zima_2024")
            cy.get('[name="email"]').type("Zima2024Cypress")
            cy.get("#back-btn").click()
       })

    });
});