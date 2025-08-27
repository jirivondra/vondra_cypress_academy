describe("Forms tests", () => {
    beforeEach(()=>{
    cy.visit("https://tredgate.com/webtrain/registration.html")
        })
    it('Check radio button', () => {
        cy.get('input[name="contact-method"]').check("phone")
        cy.get('input[name="contact-method"]').should("be.checked")
    });
    it("Check 2 Interests",()=>{
        cy.get("input[name='interests[]']").then((checkBox)=>{
            cy.get(checkBox).check(["sports", "travel"])
            cy.get("#interests-sports").should("be.checked")
            //cy.wrap(checkBox).check("travel")
            cy.get("#interests-travel").should("be.checked")
        })

    });
    it('Check and uncheck checbox', () => {
        cy.get("input[name='interests[]']").then((checkBox)=>{
            cy.get(checkBox).check("travel")
            cy.get("#interests-travel").should("be.checked")
            cy.get(checkBox).uncheck("travel")
            cy.get("#interests-travel").should("not.be.checked");
        })

    })

    it('Clean and fill name', () => {
        cy.get("#name").clear().type("Jirka")
        cy.get("#name").should("have.value", "Jirka")
        cy.get("#name").clear().type("Selsky")
        cy.get("#name").should("have.value", "Selsky");
    });

    it('Check selection value', () => {
        cy.get("#gender").within((dropdown)=>{
            cy.get(dropdown).select("female")
            cy.get(dropdown).should("have.value", "female");
        })
        

        

    });
        it('Submit form', () => {
        cy.get("#name").clear().type("Jirka")
        cy.get("#email").clear().type("test@test.cz")
        cy.get("#phone").clear().type("123456789")
        cy.get("input[name='contact-method']").check("phone")
        cy.get("#confirm-password").clear().type("heslo")
        cy.get("#date-of-birth").type("1990-12-12")
        cy.get("#gender").select("male")
        cy.get("#address").clear().type("testovaci adresa")
        cy.get("form").submit()
        cy.get("#successBox").should("be.visible").and("contain.text", "Registration successful!")
    });

    it('Upload file', () => {
        cy.fixture("test.txt").as("uploadFile")
        cy.get("input[type='file']").selectFile("@uploadFile")
    });
    it.only('Tipe date', () => {
        cy.get("#date-of-birth").type("2000-01-01")
        cy.get("#date-of-birth").should("have.value", "2000-01-01")
    });
});