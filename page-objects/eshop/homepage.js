import { customElement } from "../../cypress/e2e/helpers/custom_element"
import { RegisteredPage } from "./registered_page"

export class HomePageEshop extends RegisteredPage{
    constructor() {
    super()
    this.addToCards = customElement(`[onclick="cart.add('40');"]`)
    }
    addToCard() {
    this.addToCards.click()
    return this
   }
}