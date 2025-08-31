import { HeaderSection } from "../common/header_section";
import { CreateNewProjectModal } from "./creagit push --set-upstream origin bonus_polyte_new_project_modal";


export class ProjectsPage extends HeaderSection {
    constructor() {
        super();
        this.pageTitle = ".page-title"
        this.textTitle = "Projects"
        this.addProjectButton = 'button[test_id="Add Project"]'
        cy.get(this.pageTitle).should('contain.text', this.textTitle).and('be.visible')
    }

    clickAddProject() {
        cy.get(this.addProjectButton).click();
        return new CreateNewProjectModal()
    }
}