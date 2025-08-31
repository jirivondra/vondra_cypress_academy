/*
cypress/page-objects/pmtool/common
menu_section.js
*/




export class MenuSection {
  constructor() {
    this.projectLink = "#Projects";
    this.dashboardLink = "#dashboard";
    this.usersLink = "#Users";
  }

  clickProjectLink() {
    const { ProjectsPage } = require("../pmtool/project_page");
    cy.get(this.projectLink).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    const { DashboardPage } = require("../pmtool/dashboard_page")
    cy.get(this.dashboardLink).click();
    return new DashboardPage()
  }
  clickProjects() {
    const { DashboardPage } = require("../pmtool/dashboard_page")
    cy.get(this.projectLink).click();
    return new DashboardPage()
  }
    clickUsers() {
    const { UsersPage } = require("./user_page");
    cy.get(this.usersLink).click();
    return new UsersPage();
  }
}