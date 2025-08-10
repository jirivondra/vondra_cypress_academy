export class Form {
    constructor() {
        this.selectorFirstname = '#input-firstname';
        this.selectorLastname = '#input-lastname';
        this.selectorEmail = '#input-email';
        this.selectorTelephone = '#input-telephone';
        this.selectorPassword = '#input-password';
        this.selectorConfirm = '#input-confirm';
        this.continueButton = '.pull-right > .btn';
    }

    fillFields(testData) {
        cy.get(this.selectorFirstname).type(testData.firstName);
        cy.get(this.selectorLastname).type(testData.lastName);
        cy.get(this.selectorEmail).type(testData.email);
        cy.get(this.selectorTelephone).type(testData.phone);
        cy.get(this.selectorPassword).type(testData.password);
        cy.get(this.selectorConfirm).type(testData.password);
        return this;
    }

    submitForm() {
        cy.get(this.continueButton).click();
        return this;
    }
}