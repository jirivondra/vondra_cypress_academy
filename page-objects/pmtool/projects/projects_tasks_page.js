import { HeaderSection } from "../../common/header_section";

export class ProjectsTaskPage extends HeaderSection {
      constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
  }
}