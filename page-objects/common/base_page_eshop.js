export class BasePageEshop {
    constructor(path) {
        this.baseUrl = "https://tredgate.com/eshop/";
        this.path = path;
    }

    visit() {
        cy.visit(this.baseUrl + this.path)
        return this;
    }
    visitHp() {
        cy.visit(this.baseUrl)
        return this;
    }
}