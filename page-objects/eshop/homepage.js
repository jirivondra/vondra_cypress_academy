import { customElement } from "../../cypress/e2e/helpers/custom_element"
import { BasePage } from "../common/base_page"
import { ShoppingBasket } from "./basket_page"

export class HomePageEshop extends BasePage{
    constructor() {
    super('/eshop')
    this.addToCards = customElement(`//div[@class='product-thumb transition' and .//a[text()='iPhone']]//button[./span[text()='Add to Cart']]`)
    this.alert = customElement('.alert')
    }
    addToCard() {
    this.addToCards.xpathClick()
    return this
   }

   checkAlert(text) {
    this.alert.isVisible()
    this.alert.containsText(text)
    return new ShoppingBasket()
   }
}