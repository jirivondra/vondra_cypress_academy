import { HeaderSection } from "./header_section"

export class UsersPage extends HeaderSection {
    constructor(){
        super()
        cy.get('#Users').should('contain.text', 'Users').and('be.visible')
    }
}