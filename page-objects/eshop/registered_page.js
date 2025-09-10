import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { HomePageEshop } from "./homepage";
import { RegistrationForm } from "./registration_form_page";


export class RegisteredPage {
    constructor(){
        this.logo = customElement('.img-responsive')
        this.headLine = customElement('h1')
        
    }

    checkHeadLine(headlineText) {
        this.headLine.isVisible()
        this.headLine.haveText(headlineText)
        return this
    }

    clickLogo() {
        this.logo.isVisible()
        this.logo.click()
        return new HomePageEshop
    }
}