import { customElement } from "../../cypress/e2e/helpers/custom_element";
import { HeaderSection } from "../common/header_section";
import { CreateNewProjectModal } from "./create_new_project_modal";



export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = customElement(
      "button[test_id='Add Project']"
    );
    this.projectsTable = customElement(".table-bordered");
    this.filtersTableBody = customElement(
      'div[test_id="Filters"] .portlet-body'
    );
    this.filtersTableHeader = customElement(
      'div[test_id="Filters"] .portlet-title'
    );
    this.addProjectButton = customElement('[test_id="Add Project"]')
    this.dropdownWithSelected = customElement('[test_id="with_selected_dropdown"]')
    this.uploadButton = customElement('[test_id="import_button"]')
    this.searchInput = customElement('[test_id="search_input"]')
    this.searchButton = customElement('[test_id="search_button"]')
    this.columnNameAction = customElement('[test_id="Action"]')
    this.columnNameId = customElement('[test_id="ID"]')
    this.columnNamePriority = customElement('[test_id="Priority"]')
    this.columnNameName = customElement('[test_id="Name"]')
    this.columnNameStatus = customElement('[test_id="Status"]')
    this.columnNameStartDate = customElement('[test_id="Start Date"]')
    this.columnNameDateAdded = customElement('[test_id="Date Added"]')
    this.columnNameCreatedBy = customElement('[test_id="Created By"]')
    this.addFilterButton = customElement('[test_id="Add_filter"]')
  }

  clickAddProject() {
    this.projectsTable.isVisible();
    this.addProjectButton.get().click();
    return new CreateNewProjectModal();
  }

  clickFiltersHeader() {
    this.filtersTableHeader.get().click();
    return this;
  }

  wait(time) {
    cy.wait(time)
    return this
  }

  
}
