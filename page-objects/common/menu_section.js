/*
cypress/page-objects/pmtool/common
menu_section.js
*/

import { BasePage } from "./base_page";

export class MenuSection extends BasePage{
  constructor(path) {
    super(path);
    this.projectLink = "#Projects";
    this.dashboardLink = "#dashboard";
    this.usersLink = "#Users a.menu-itemsitems1";
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
}