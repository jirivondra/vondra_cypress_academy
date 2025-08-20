import { LoginPage } from "../../../../page-objects/pmtool/login_page";



describe("Login and Projects Page Tests", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it("should successfully log in and access projects page", () => {
        new LoginPage()
            .openPmtool()
            .typeUsername("cypress_zima_2024")
            .typePassword("Zima2024Cypress")
            .clickLogin();

        // new LoginPage()
        //     .visitProjects();
    });
});