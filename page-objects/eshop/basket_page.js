import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { BasePage } from "../common/base_page";

export class ShoppingBasket extends BasePage{
    constructor() {
        super('eshop/index.php?route=checkout/cart')
        this.unitPrice = customElement(`(//table/tbody//tr[.//a[contains(text(), 'iPhone')]]/td[5])[2]`)
        this.quantity = customElement('table .input-group > input')
        this.totalPrice = customElement(`//table[@class='table table-bordered']/tbody/tr[1]/td[6]`)
        this.model = customElement(`(//table/tbody//tr[.//a[contains(text(), 'iPhone')]]/td[3])[2]`)
        this.detaleButton = customElement(`[data-original-title="Remove"]`)
        this.dropDownBasket = customElement('#cart > .dropdown-toggle')
        this.buttonBasket = customElement(`strong`)
        this.statusMessage = customElement('#content > p')
    }


   checkUnitPrice(unitPrice) {
   this.unitPrice.xpathHaveText(unitPrice)
   return this
   }
   checkQuantityValue(attributeName, expectedValue) {
   this.quantity.checkInvokedAttr(attributeName, expectedValue)
   return this
   }
   checkTotalPrice(totalPrice) {
    this.totalPrice.xpathHaveText(totalPrice)
    return this
   }
   checkModel(model) {
    this.model.xpathHaveText(model)
    return this
   }
   delateItem() {
    this.detaleButton.click()
    return this
   } 
   wait(waitingTime) {
      cy.wait(waitingTime)
      return this
    }

    checkStatus(text) {
        this.statusMessage.haveText(text)
        return this
    }
   
   checkBasket(testData) {
       this.checkUnitPrice(testData.unitPrice);
        this.checkQuantityValue(testData.quantity.attribute, testData.quantity.value);
        this.checkTotalPrice(testData.unitPrice);
        this.checkModel(testData.model)
        return this
   }
}