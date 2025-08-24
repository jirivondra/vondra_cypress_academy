export class ShoppingProcess {
    constructor(url, selectElement, findElement,itemText, cartSelector) {
        this.url = url;
        this.selectElement = selectElement;
        this.findElement = findElement;
        this.itemText = itemText;
        this.cartSelector = cartSelector;
    }

    visitPage() {
        cy.visit(this.url);
        return this;
    }

    addItemToBasket() {
        cy.get(this.selectElement)
            .find(this.findElement)
            .contains(this.itemText)
            .click();
        return this;
    }

    goToCart() {
        cy.get(this.cartSelector).click();
        return this;
    }
}