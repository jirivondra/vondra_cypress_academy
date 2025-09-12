import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { HeaderSection } from "../../common/header_section";
import { ProjektInfoPage } from "./project_info_page";

export class ProjectsTaskPage extends HeaderSection {
      constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`)
    this.projectName = customElement('.navbar-header > .navbar-brand')
  }
  projectNameIsVisiable() {
  this.projectName.isVisible()
    return this
  }

  clickToDetailProject() {
    this.projectName.click()
    return new ProjektInfoPage()
  }
}


