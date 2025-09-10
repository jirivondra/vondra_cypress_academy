// custom_element.js
// cypress/helpers

export const customElement = (selector) => {
  const element = {
    isVisible() {
      cy.get(selector).should("be.visible");
      return this;
    },
    isNotVisible() {
      cy.get(selector).should("not.be.visible");
      return this;
    },
    haveText(text) {
      cy.get(selector).should("have.text", text);
      return this;
    },
    checkXpathText(text) {
      cy.xpath(selector).should('have.text', text)
    },
    checkXpathContain(text) {
      cy.xpath(selector).should('contain.text', text)
    },
    containsText(text) {
      cy.get(selector).should("contain.text", text);
      return this;
    },
    xpathEmpty () {
      cy.xpath(selector).should('be.empty')
    },
    haveValue(value) {
      cy.get(selector).should("have.value", value);
      return this;
    },
    havePlaceholder(placeholder) {
      cy.get(selector).should("have.attr", "placeholder", placeholder);
      return this;
    },
    haveAttribute(attribute, value) {
      cy.get(selector).should("have.attr", attribute, value);
      return this;
    },
    click() {
      cy.get(selector).click();
      return this;
    },
    type(value) {
      cy.get(selector).type(value);
      return this;
    },
    clear() {
      cy.get(selector).clear();
      return this;
    },
    selectOption(option) {
      cy.get(selector).select(option)

      return this
    },
    checkContains(text){
      this.get().contains(text).click()
      return this
    },
    get() {
      return cy.get(selector);
    },
    
  };
   return element;
};