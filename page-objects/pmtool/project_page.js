import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { HeaderSection } from "../common/header_section";
import { CreateNewProjectModal } from "./create_new_project_modal";


export class ProjectsPage extends HeaderSection {

    constructor() {
        super("module=items/items&path=21");
        this.addProjectButton = customElement('button[test_id="Add Project"]');
    }

    clickAddProject() {
        this.addProjectButton.click();
        return new CreateNewProjectModal()
    }

}
