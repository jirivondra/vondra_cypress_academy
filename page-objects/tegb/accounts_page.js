export class AccountsPage {
    constructor() {
        this.titleHeader = customElements('[data-testid="title"]')
    }
    titleHaveText(titleText) {
        this.titleHaveText.haveText(titleText)
        return this
    }
}