/*
Cvičení ⌛5:00:
Vytvořte nový testovací soubor polymorphism_tests.cy.js ve složce e2e/exercises
Vytvořte nový test, který:
Otevře a přihlásí se do Pmtool
Otevře Projects
Odhlásí se
*/

import { LoginPage } from "../../../page-objects/pmtool/login_page";


describe("Exercise: Using Polymorphism", () => {
  it("Pmtool Login, Open Projects, Logout", () => {
    new LoginPage()
    .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProjectLink()
      .clickProfile()
      .clickLogout();
  });
});
