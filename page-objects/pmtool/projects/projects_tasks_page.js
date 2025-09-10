import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { HeaderSection } from "../../common/header_section";

export class ProjectsTaskPage extends HeaderSection {
      constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
    this.projectInfoButton = customElement(".navbar-header .navbar-brand")
  }

clickProjectInfo() {
  this.projectInfoButton.click()
  // ! TODO Add return object
}
}