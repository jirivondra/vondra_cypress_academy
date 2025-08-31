
import { UsersPage } from "../../../page-objects/common/user_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe('Testing Navigation in the PM Tool Application', () => {
    before(()=>{
       new LoginPage()
        .openPmtool()
       .login(Cypress.env('pmtool_username'), Cypress.env('pmtool_password'))
    })
    it('Should navigate through Projects, Dashboard, Users and then log out', () => {
    new UsersPage()
    .clickProjectLink()
    .clickDashboard()
    .clickUsers()
    .clickProfile()
    .clickLogout()
    });
});