import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { LoginPage } from "../login_page";

export class ProjektInfoPage{
    constructor() {
        this.infoButton = customElement('[title="Info"]')
        this.projectName = customElement('.caption')
        this.status = customElement("//th[contains(., 'Status')]/following-sibling::td")
        this.startDate = customElement("//th[contains(., 'Start Date')]/following-sibling::td")
        this.dateAdded = customElement("//th[contains(., 'Date Added')]/following-sibling::td")
        this.createdBy = customElement("//th[contains(., 'Created By')]/following-sibling::td")

    }

    openTaskInfoPage(){
        this.infoButton.click()
        return this
    }
    checkProjectName(name) {
        this.projectName.containsText(name)
        return this
    }
    checkProjectStatus(status) {
        this.status.haveText(status)
        return this
    }
    checkStartDate(startDate) {
        this.startDate.haveText(startDate)
        return this
    }
    checkCreatedBy(user) {
        this.createdBy.haveText(user)
        return new LoginPage()
    }

    checkDateAdd(addDate) {
        this.dateAdded.containsText(addDate)
        return this
    }
}