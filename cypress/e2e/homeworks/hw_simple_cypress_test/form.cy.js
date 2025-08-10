/*
Získejte až 50 bonusových bodů.
Branch: bonus_hw_simple_cypress_test
Složka: cypress/e2e/homeworks/hw_simple_cypress_test
Vytvoř nový test (v novém testovacím souboru), který:
Otevře stránku přes cy.visit: https://tredgate.com/webtrain/registration.html
Vyplní všechna textová pole mimo datum narození (používej proměnné pro uložení dat)
Klikne na tlačítko Submit
Hotovou práci napushuj do Github a vytvoř Pull Request na Petra
*/

const testUrl = "https://tredgate.com/webtrain/registration.html"
const person = {
    name: "Jiří Vondra",
    email: "voji1@yahoo.com",
    phone: "723646014",
    password: "Heslo123Heslo",
    address: "Šmeralova 331/21, Praha 7",
}

const testData = {
    name: "#name",
    email: "#email",
    phone: "#phone",
    password: "#password",
    confirmPassword: "#confirm-password",
    address: "#address",
    submitButton: "button[type='submit']"
}

describe('Test registration form', () => {
    it('Fill the form and submit it', () => {
        cy.visit(testUrl)
        cy.get(testData.name).type(person.name)
        cy.get(testData.email).type(person.email)
        cy.get(testData.phone).type(person.phone)
        cy.get(testData.password).type(person.password)
        cy.get(testData.confirmPassword).type(person.password)
        cy.get(testData.address).type(person.address)

        cy.get(testData.submitButton).click()
    });
});