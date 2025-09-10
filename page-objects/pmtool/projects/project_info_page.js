// project_info_page.js
// cypress/page-objects/pmtool/projects

import { HeaderSection } from "../../common/header_section";

export class projectInfoPage extends HeaderSection {
    constructor(projectId = ""){
        super(`module=items/info&path=21-${projectId}`)
        

    }
}