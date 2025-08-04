export class LostPasswordPage {
    constructor() {
    this.passwordForgotten = "#forget_password";
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.sendButton = ".btn-info";
    }

    pressButtonRetestPassword() {
        cy.get(this.passwordForgotten).click();
    }

    typeEmail(email) {
        cy.get(this.nameUserResetPassword).type(email);
    }

    typeUsername(username) {
        cy.get(this.emailResetPassword).type(username);
    }

    sendButton() {
        cy.get(this.buttonSend).click();
    }
}