import { LoginPage } from "../../../../page-objects/pmtool/login_page";
import { ProjectsTaskPage } from "../../../../page-objects/pmtool/projects/projects_tasks_page";

describe("Using dynamic URL Path in Atomic Tests", () => {
    it('Open Project Task Page Directly with path ', () => {
    const projectId = "4795"
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"));
    new ProjectsTaskPage(projectId).visit();
    });

    it('Create Project and Logout', () => {
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
      .clickProjectLink()
      .clickAddProject()
      .typeName("TEST1234")
      .clickSave()
      .clickProfile()
      .clickLogout();
    });
});
