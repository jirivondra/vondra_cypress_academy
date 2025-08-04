/*
Cvičení - Vytvořte nový test a PageObject výkazy (⌛15:00)
V souboru: login_logout_tests.cy.js vytvořte nový test (it): Pmtool Login and Logout test
Ve složce cypress/page-objects/pmtool Vytvořte nový Page Object pro domovskou stránku (dashboard_page.js).
Page Object (DashboardPage) bude obsahovat:
Klik na profilovou sekci - selektor: #user_dropdown
Klik na odhlášení - selektor: #logout
Do testu vložte přihlášení a následně odhlášení (použijte metodu login)


Pokud chceme provolávat více Page Objectů v rámci testu, samozřejmě můžeme. Musíme si ale inicializovat oba. Mohlo by to vypadat například takto:
  it("2 Page Objects", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    homePage.someMethod();
  });
*/

export class DashboardPage {
  constructor() {
    this.userDropdown = "#user_dropdown";
    this.logout = "#logout";
  }

  clickProfile() {
    cy.get(this.userDropdown).click();
  }

  clickLogout() {
    cy.get(this.logout).click();
  }

  logout() {
    this.clickProfile();
    this.clickLogout();
  }
}