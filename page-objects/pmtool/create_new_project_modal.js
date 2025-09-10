//import { ProjectsTasksPage } from "./projects/projects_tasks_page.js";

import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { BasePage } from "../common/base_page";
import { ProjectsTasksPage } from "./projects/project_info_page";

export class CreateNewProjectModal {
    constructor () {
        this.projectNameInput = customElement('[data-testid="Name"] input');
        this.saveButton = customElement('button[type="submit"]');
        this.priority = customElement('[data-testid="Priority"] > select')
        this.startData = customElement('[data-testid="Start Date"] input')
        this.status = customElement('[data-testid="Status"] > select')
    }

    selectPriority(priority) {
        this.priority.selectOption(priority)
        return this
    }

    selectStatus(status) {
        this.status.selectOption(status)
        return this
    }

    typeName(name) {
        this.projectNameInput.clear()
        this.projectNameInput.type(name)
        this.projectNameInput.haveValue(name)
        return this;
    }

    selectDate(startDate) {
        this.startData.clear()
        this.startData.click().type("{esc}" + startDate)
        this.startData.haveValue(startDate)
        return this
    }

    clickSave() {
        this.saveButton.isVisible()
        this.saveButton.click()
       return new ProjectsTasksPage()
    }
}
