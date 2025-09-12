import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { ProjectsTasksPage } from "./project_info_page";
import { ProjectsTaskPage } from "./projects_tasks_page";
import { TasksPage } from "./tasks_page";

export class CreateNewTaskModal {
    constructor() {
        this.type = customElement('[data-testid="Type"] > select')
        this.selectedType = customElement('[data-testid="Type"] option:selected')
        this.name = customElement('[data-testid="Name"] input')
        this.status = customElement('[data-testid="Status"] > select')
        this.selectedStatus = customElement('[data-testid="Status"] option:selected')
        this.assignedTo = customElement(`//label[contains(., 'Petr Fifka')]/div/span/input[@type='checkbox' and @value='12']`)
        this.submitButton = customElement('[type="submit"]')
    }
    selectType(type) {
        this.type.selectOption(type)
        return this
    }

    checkType (type) {
        this.selectedType.haveText(type)
        return this
    }
    fillName(name) {
        this.name.type(name)
        return this
    }
    checkName(name) {
        this.name.haveValue(name)
        return this
    }
    selectStatus(status) {
        this.status.selectOption(status)
        return this
    }

    checkStatus(status) {
        this.selectedStatus.haveText(status)
        return this
    }
    checkAssigned(name) {
        this.assignedTo.checkOption(name)
        return this
    }

    controlCheckAssigned(checkBox) {
        this.assignedTo.beChecked(checkBox)
        return this
    }

    saveButtonExist() {
        this.submitButton.isExist()
        return this
    }

    clickSaveButton() {
        this.submitButton.click()
        return new ProjectsTaskPage()
    }
    

}