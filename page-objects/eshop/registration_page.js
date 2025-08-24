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

    fillFirstname(testData) {
    cy.get(this.selectorFirstname).type(testData.firstName);
    return this;
}
fillLastname(testData) {
    cy.get(this.selectorLastname).type(testData.lastName);
    return this;
}
fillEmail(testData) {
    cy.get(this.selectorEmail).type(testData.email);
    return this;
}
fillTelephone(testData) {
    cy.get(this.selectorTelephone).type(testData.phone);
    return this;
}
fillPassword(testData) {
    cy.get(this.selectorPassword).type(testData.password);
    return this;
}
fillConfirmPassword(testData) {
    cy.get(this.selectorConfirm).type(testData.password);
    return this;
}


    fillFields(testData) {
        this.fillFirstname(testData);
        this.fillLastname(testData);
        this.fillEmail(testData);
        this.fillTelephone(testData);
        this.fillPassword(testData);
        this.fillConfirmPassword(testData);
        return this;
    }

    submitForm() {
        cy.get(this.continueButton).click();
        return this;
    }
}