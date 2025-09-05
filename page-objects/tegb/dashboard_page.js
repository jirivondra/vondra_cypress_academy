import { AccountsPage } from "./accounts_page"

export class DashboardPage {
    constructor() {
        cy.intercept("/accounts/user/**")
        this.accountsButton = customElements('[data-testid="accounts_section_link"]')
    }
    clickAccounts() {
        this.accountsButton.click()
        cy.wait("@accounts_api")
        return new AccountsPage()
    }
}