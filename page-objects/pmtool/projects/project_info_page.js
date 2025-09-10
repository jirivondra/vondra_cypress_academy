import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { LoginPage } from "../login_page";

export class ProjectsTasksPage{
    constructor() {
        this.infoButton = customElement('[title="Info"]')
        this.projectName = customElement('.user-name')
        this.status = customElement("//th[text()='Status']/following-sibling::td")
        this.startDate = customElement("//th[text()='Start Date']/following-sibling::td")
        this.dateAdded = customElement("//th[text()='Date Added']/following-sibling::td")
        this.createdBy = customElement("//th[text()='Created By']/following-sibling::td")

    }

    openTaskInfoPage(){
        this.infoButton.click()
        return this
    }
    checkProjectName(name) {
        this.projectName.haveText(name)
        return this
    }
    checkProjectStatus(status) {
        this.status.checkXpathText(status)
        return this
    }
    checkStartDate() {
        this.startDate.xpathEmpty()
        return this
    }
    checkCreatedBy(user) {
        this.createdBy.checkXpathText(user)
        return this
    }

    CheckDateAdd(addDate) {
        this.dateAdded.checkXpathContain(addDate)
        return this
    }

    checkTaskInfo(testData) {
        this.openTaskInfoPage()
        this.checkProjectName(testData.task.assignedTo)
        this.checkProjectStatus(testData.task.status)
        this.checkStartDate()
        this.CheckDateAdd(testData.task.dateAdd)
        this.checkCreatedBy(testData.task.createdBy)
        return new LoginPage()
    }

}