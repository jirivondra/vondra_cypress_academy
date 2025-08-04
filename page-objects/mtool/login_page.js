export class LoginPage {
   constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.passwordForgotten = "#forget_password";
   }
openPmtool(){
    cy.visit(this.url);
}
typeUserName(username){
    cy.get(this.usernameInput).type(username);
}
typePassword(password){
    cy.get(this.passwordInput).type(password);
}
clickButtonLogin(){
    cy.get(this.loginButton).click()
}
login(username,password) {
    this.openTool()
    this.typeUserName(username);
    this.typePassword(password);
    this.clickButtonLogin();
}
  clickPasswordForgotten() {
    cy.get(this.passwordForgottenAnchor).click();
  }

}