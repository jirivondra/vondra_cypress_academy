

export class Form {
    constructor(){
      this.eShopUrl =  "https://automationteststore.com/"
      this.loginAndRegistrationButton = "#customer_menu_top a"
      this.continueButton = 'button[title="Continue"]' 
      this.country = "Czech Republic"
      this.selectMessage = 
      this.continueButton = '[title="Continue"]'

    }

 openEshop(){
    cy.visit(this.eShopUrl)
    return this
 }
 clickOnButtonRegistration() {
   cy.get(this.loginAndRegistrationButton).click({force: true})
   return this
 }
 clickOnContinue (){
   cy.get(this.continueButton).click({force: true})
   return this
 }
 clickElement(selectElement){
    cy.get(selectElement).click({force: true})
    return this
 }
typeInput(selectElement, fillText) {
   cy.get(selectElement).clear().type(fillText)
   cy.get(selectElement).should('have.value', fillText)

   return this
}

selectOption(selectElement, selectOption, sectionText){
   cy.get(selectElement).select(selectOption)
   cy.get(selectElement).should('have.value', selectOption)
   cy.get(selectElement).find(`option[value=${selectOption}]`).should('contain.text', sectionText)
   return this
}

wait(time) {
   cy.wait(time)
   return this
}

checkRadioButton(selectElement, selectValue) {
   cy.get(selectElement)
     .check(selectValue)
     .should('be.checked');
   return this;
}

checkCheckbox (selectElement) {
   cy.get(selectElement).check()
   .should('be.checked')
   return this
}

clickSubmitButton() {
   cy.get(this.continueButton).click()
   return this
}

checkValidationmessage(validationText) {
cy.get(this.selectMessage).should('contain.text', validationText)
}

fillRegistrationForm(data) {
    this.typeInput(data.firstName.selector, data.firstName.data)
        .typeInput(data.lastName.selector, data.lastName.data)
        .typeInput(data.email.selector, data.email.data)
        .typeInput(data.telephone.selector, data.telephone.data)
        .typeInput(data.fax.selector, data.fax.data)
        .typeInput(data.company.selector, data.company.data)
        .typeInput(data.address1.selector, data.address1.data)
        .typeInput(data.address2.selector, data.address2.data)
        .typeInput(data.city.selector, data.city.data)
        .selectOption(data.country.selector, data.country.data, data.country.textSelect)
        .wait(1000)
        .selectOption(data.regionState.selector, data.regionState.data, data.regionState.textSelect)
        .typeInput(data.zipCode.selector, data.zipCode.data)
        .typeInput(data.loginName.selector, data.loginName.data)
        .typeInput(data.password.selector, data.password.data)
        .typeInput(data.confirmPassword.selector, data.password.data)
        .checkRadioButton(data.newslatterSubscribe.selector, data.newslatterSubscribe.data)
        .checkCheckbox(data.agreeCheckbox.selector)
        .clickSubmitButton();
    return this;
}

}