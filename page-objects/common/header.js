export class Header {
    constructor() {
        this.logo = "#logo"
    }
clickLogo() {
    cy.get(this.logo).click()
}
}