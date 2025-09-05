import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { DashboardPage } from "./dashboard_page";

export class TegBLoginPage {
  constructor() {
    this.url = "https://localhost:3001";
    this.usernameInput = customElement('[data-testid="username"]');
    this.passwordInput = customElement('[data-testid="password"]');
    this.loginButton = customElement('[data-testid="log_in"]');
    // ! Pokud voláme new TegBloginPage opakovaně, dochází k duplicitnímu nastevení interceptu 
    cy.intercept("/auth/login/").as("login_api")
  }

  openTegb() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    cy.wait('@login_api')
    return new DashboardPage()
    // TODO: Add return value for Dashboard
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return this.clickLogin()
    // TODO: Add return value for Dashboard
  }
}