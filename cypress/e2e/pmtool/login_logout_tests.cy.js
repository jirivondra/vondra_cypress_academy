import { DashboardPage } from "../../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe('Page Object: Login and Logout Tests', () => {
    it.skip('Login to Pmtool', () => {
        const loginPage = new LoginPage();
        loginPage.openTool();
        loginPage.typeUserName("cypress_zima_2024");
        loginPage.typePassword("Zima2024Cypress");
        loginPage.clickButtonLogin();
    });
    it.skip('Login to Pmtool (group method)', () => {
        const loginPage = new LoginPage();
        loginPage.login("cypress_zima_2024", "Zima2024Cypress")
    });
    it('Pmtool Login and logout Test', () => {
        const loginPage = new LoginPage();
        const logoutPage = new DashboardPage()
        loginPage.login("cypress_zima_2024", "Zima2024Cypress")
        logoutPage.clickProfile()
        logoutPage.clickLogout()
    });
});