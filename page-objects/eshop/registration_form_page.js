import { customElement } from "../../cypress/e2e/helpers/custom_element.js";
import { BasePage } from "../common/base_page";
import { RegisteredPage } from "./registered_page";


export class RegistrationForm extends BasePage {
    constructor(){
        super("eshop/index.php?route=account/register")
        this.firstName = customElement('#input-firstname')
        this.firtNamePlaceHolder = 'First Name'
        this.lastName = customElement('#input-lastname')
        this.lastNamePlaceHolder = "Last Name"
        this.email = customElement("#input-email")
        this.emailPlaceHolder = 'E-Mail'
        this.telephone = customElement("#input-telephone")
        this.telephonePlaceHolder = 'Telephone'
        this.password = customElement("#input-password")
        this.passwordPlaceHolder = 'Password'
        this.confirmPassword = customElement("#input-confirm")
        this.confirmPasswordPlaceHolder = 'Password Confirm'
        this.subscibe = customElement('.radio-inline > input[type="radio"]')
        this.agree = customElement('input[type="checkbox"]')
        this.continueButton = customElement('.btn[value="Continue"]')
    }

    typeFirstName(firstName) {
        this.firstName.havePlaceholder(this.firtNamePlaceHolder)
        this.firstName.clear()
        this.firstName.type(firstName)
        this.firstName.haveValue(firstName)
        return this
    }
    typeLastName(lastName) {
        this.lastName.havePlaceholder(this.lastNamePlaceHolder)
        this.lastName.clear()
        this.lastName.type(lastName)
        this.lastName.haveValue(lastName)
        return this
    }
    typeEmail(email) {
        this.email.havePlaceholder(this.emailPlaceHolder)
        this.email.clear()
        this.email.type(email)
        this.email.haveValue(email)
        return this
    }
    typeTelephone(telephone) {
        this.telephone.havePlaceholder()
        this.telephone.clear()
        this.telephone.type(telephone)
        this.telephone.haveValue(telephone)
        return this
    }
    typePassword(password) {
        this.password.havePlaceholder(this.passwordPlaceHolder)
        this.password.clear()
        this.password.type(password)
        this.password.haveValue(password)
        return this
    }
    
    typeConfirmPassword(confirmPassword) {
        this.confirmPassword.havePlaceholder(this.confirmPasswordPlaceHolder)
        this.confirmPassword.clear()
        this.confirmPassword.type(confirmPassword)
        this.confirmPassword.haveValue(confirmPassword)
        return this
    }

   checkradionSubscripe(radioOption) {
    this.subscibe.check(radioOption)
    this.subscibe.isChecked()
    return this
   }

   checkCheckboxAgree() {
    this.agree.check()
    this.agree.isChecked()
    return this
   }

   clickContinue() {
    this.continueButton.isVisible()
    this.continueButton.click()
    return new RegisteredPage()
   }
    
   fillFrom(testData){
    this.typeFirstName(testData.firstName);
    this.typeLastName(testData.lastName);
    this.typeEmail(testData.email);
    this.typeTelephone(testData.telephone);
    this.typePassword(testData.password);
    this.typeConfirmPassword(testData.password);
    this.checkradionSubscripe(testData.radioOption)
    this.checkCheckboxAgree()
    this.clickContinue()
   }

}