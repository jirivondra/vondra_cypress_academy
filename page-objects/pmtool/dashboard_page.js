import { HeaderSection } from "../common/header_section.js";


export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    this.projectLink = "#Projects";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

}
