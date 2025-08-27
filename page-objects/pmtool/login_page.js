
import { DashboardPage } from "./dashboard_page.js";
import { LostPasswordPage } from "./lost_password_page.js";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.passwordForgottenAnchor = "#forget_password";
    this.pageHeader= "h3.form-title";
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  clickPasswordForgotten() {
    cy.get(this.passwordForgottenAnchor).click();
    return new LostPasswordPage();
  }

checkPlaceholder(selectedElement, placeholderName){
  cy.get(selectedElement)
    .invoke('attr', 'placeholder')
    .should('eq', placeholderName)
    return this;
}

checkText(selectElement, expectedText) {
  cy.get(selectElement).should("have.text", expectedText)
  return this
}

visibilityelement(selectElement){
  cy.get(selectElement).should("be.visible")
  return this;
}

}
