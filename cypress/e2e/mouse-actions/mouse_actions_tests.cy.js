describe("Mouse Actions Tests", () => {
    it('Scoll Into View', () => {
        cy.visit("https://tredgate.com/webtrain/index.html")
        cy.get("#users_table_2").scrollIntoView()
    });
    it('Scoll Into View', () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get('[data-testid="double-click-box"]').dblclick();
    });

   it("Click and Hold Test", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get(".hold-button").trigger("mousedown");
    cy.wait(1500);
    cy.get(".hold-button").trigger("mouseup");
  });
  
  it('Drag and drop', () => {
    cy.visit("https://webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable", {})
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it.only('Use real hover tests', () => {
      cy.visit("https://tredgate.com/webtrain/web-actions.html")
      cy.get('[data-testid="hover-box"]').realHover().then(()=>{
        cy.wait(2000)
        cy.get('[data-testid="hover-message"]').should("be.visible")
      })
  });
});
