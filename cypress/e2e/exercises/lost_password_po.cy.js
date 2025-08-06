/*
Cvičení: Vytvoření nových PO a testu (⌛15:00)
Vytvořte test, který:
Otevře přihlašovací stránku Pmtool
Klikne na odkaz: Password forgotten?
Vyplní:
Email: test@tredgate.cz
Uživatelské jméno: test
Klikne na tlačítko send.

Umístění testu: cypress/e2e/exercises
Název testovacího souboru: lost_password_po.cy.js

Umístění page objectu: cypress/page-objects/pmtool
Název page objectu: lost_password_page.js
Název class: LostPasswordPage

Selektory:
Password forgotten (LoginPage): #forget_password
Email: :nth-child(3) > .input-icon > .form-control
Uživatelské jméno: :nth-child(2) > .input-icon > .form-control
Send: .btn-info

*/

import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { LostPasswordPage } from "../../../page-objects/pmtool/lost_password_page";



describe('Exercise: Page Objects - Lost Password', () => {
    it('Lost Password Test', () => {
      const loginPage = new LoginPage;
      const lostPasswordPage = new LostPasswordPage();


    loginPage.openPmtool();
    loginPage.clickPasswordForgotten();
    lostPasswordPage.typeEmail("test@tredgate.cz");
    lostPasswordPage.typeUsername("test");
    lostPasswordPage.clickSend();
    });
});