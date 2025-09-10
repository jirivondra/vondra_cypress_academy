describe("Tegb Accounts Tests", () => {
  it("Login and Open Accounts", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .clickAccounts()
      .titleHaveText("Account");
  });
});