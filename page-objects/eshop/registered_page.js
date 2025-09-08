import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { HomePageEshop } from "./homepage";
import { RegistrationForm } from "./registration_form_page";


export class RegisteredPage extends RegistrationForm {
    constructor(){
        super()
        this.logo = customElement('.img-responsive')
    }

    clickLogo() {
        this.logo.click()
        return new HomePageEshop
    }
}