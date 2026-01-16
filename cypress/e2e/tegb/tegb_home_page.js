import { BasePage } from "../../../page-objects/common/base_page"
import { customElement } from "../helpers/custom_element"

export class TegbHomePage{

    constructor(){
        this.homepageTegbHp = Cypress.env("tegb_url") + "app"
        this.balance = customElement('[data-testid="amount"]')
    }

    openHp() {
        cy.visit(this.homepageTegbHp)
        return this
    }

    checkBalance(text) {
    this.balance.haveText(text)
    return this
    }
}