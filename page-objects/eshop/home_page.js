import { Form } from "./registration_page";


export class Homepage {
    constructor(){
        this.url = "https://tredgate.com/eshop/",
        this.menu = ".list-inline > .dropdown > .dropdown-toggle",
        this.form = ".dropdown-menu > :nth-child(1) > a"
    }
    visitPage(){
        cy.visit(this.url)
        return this;
    };
    openRegisterForm(){
        cy.get(this.menu ).click({ multiple: true })
        cy.get(this.form).click({ multiple: true })
        return new Form();
    }

}