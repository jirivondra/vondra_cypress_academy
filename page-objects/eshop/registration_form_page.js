import { BasePageEshop } from "../common/base_page_eshop";
import { customElement } from "../../cypress/e2e/helpers/custom_element.js";
import { RegisteredPage } from "./registered_page";


export class RegistrationForm extends BasePageEshop {
    constructor(){
        super("index.php?route=account/register")
        this.firstName = customElement('#input-firstname')
        this.lastName = customElement('#input-lastname')
        this.email = customElement("#input-email")
        this.telephone = customElement("#input-telephone")
        this.password = customElement("#input-password")
        this.confirmPassword = customElement("#input-confirm")
        this.subscibe = customElement('.radio-inline > input[type="radio"]')
        this.agree = customElement('input[type="checkbox"]')
        this.continueButton = customElement('.btn[value="Continue"]')
    }

    typeFirstName(firstName) {
        this.firstName.type(firstName)
        return this
    }
    typeLastName(lastName) {
        this.lastName.type(lastName)
        return this
    }
    typeEmail(email) {
        this.email.type(email)
        return this
    }
    typeTelephone(telephone) {
        this.telephone.type(telephone)
        return this
    }
    typePassword(password) {
        this.password.type(password)
        return this
    }
    
    typeConfirmPassword(confirmPassword) {
        this.confirmPassword.type(confirmPassword)
        return this
    }

   checkradionSubscripe(radioOption) {
    this.subscibe.check(radioOption)
    return this
   }

   checkCheckboxAgree() {
    this.agree.check()
    return this
   }

   clickContinue() {
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
    
   }

}