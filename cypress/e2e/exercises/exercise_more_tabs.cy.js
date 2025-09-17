/*

Cvičení ( ⌛5:00)
Otevři WebdriverUniversity: http://www.webdriveruniversity.com/ a ve složce exercises a souboru: exercise_more_tabs.cy.js vytvoř test, který:
Klikne na nadpis: LOGIN PORTAL (musíte odstranit atribut target)
Po otevření aplikace vyplň jakékoliv username do daného pole v aplikaci.

*/


describe("Exercise: More Tabs Hack", () => {
  it("Webdriveruniversity remove target from anchor", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#text").type("Something");
  });
});

