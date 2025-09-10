import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { ProjectsTasksPage } from "./project_info_page";

export class CreateNewTaskModal {
    constructor() {
        this.type = customElement('[data-testid="Type"] > select')
        this.name = customElement('[data-testid="Name"] input')
        this.status = customElement('[data-testid="Status"] > select')
        this.assignedTo = customElement('[data-testid="Assigned To"]')
        this.submitButton = customElement('[type="submit"]')
    }
    selectType(type) {
        this.type.selectOption(type)
        this.wait(500)
        return this
    }
    fillName(name) {
        this.name.clear()
        this.name.type(name)
        this.name.haveValue(name)
        return this
    }
    selectStatus(status) {
        this.status.selectOption(status)
        this.wait(500)
        return this
    }
    checkAssigned(name) {
        this.assignedTo.checkContains(name)
        return this
    }

    clickSaveButton() {
        this.submitButton.click()
        return new ProjectsTasksPage()
    }
    
    wait(time) {
      cy.wait(time)
      return this
    }

    fillFormTask(testData){
        this.selectType(testData.task.type)
        this.fillName(testData.task.name)
        this.selectStatus(testData.task.status)
        this.checkAssigned(testData.task.assignedTo)
        this.clickSaveButton()
    }
}