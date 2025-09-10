import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { AccountsPage } from "./accounts_page";


export class DashboardPage {
  constructor() {
    cy.intercept("/accounts/user/**").as("accounts_api");
    this.accountsButton = customElement(
      '[data-testid="accounts_section_link"]'
    );
  }

  clickAccounts() {
    this.accountsButton.click();
    cy.wait("@accounts_api");
    return new AccountsPage();
  }
}
