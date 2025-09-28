import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../../page-objects/pmtool/project_page";

const text = {
    addProjectButton: 'Add Project',
    dropdownWithSelected: 'With Selected',
    searchInput: 'Search',
    columnNameAction: 'Action',
    columnNameId: 'ID',
    columnNamePriority: 'Priority',
    columnNameName: 'Name',
    columnNameStatus: 'Status',
    columnNameStartDate: 'Start Date',
    columnNameDateAdded: 'Date Added',
    columnNameCreatedBy: 'Created By'
}

describe("Projects Page Atomic Tests",{testIsolation: false}, () => {
    const projectsPage = new ProjectsPage()
  before(() => {
    cy.clearCacheAll()
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit().wait(1000)
  });

  context("Filters Table Tests", () => {
    it.skip("Filters section is visible", () => {
      new ProjectsPage().filtersTableHeader.clickOption('center')
      new ProjectsPage().filtersTableBody.isVisible();
    });

    it.skip("Hide Filters section, it is not visible", () => {
      const projectsPage = new ProjectsPage();
      projectsPage.clickFiltersHeader();
      projectsPage.filtersTableBody.isNotVisible();
    });

    it('Add Filters Button is visiable', () => {
         new ProjectsPage().addFilterButton.isVisible()
    });

    it('Add filters', () => {
        new ProjectsPage().addFilterButton.click().type('{esc}')
    });

    it("Filters Header is visible", () => {
      new ProjectsPage().filtersTableHeader.isVisible();
    });

    it("Filters Header has text", () => {
      new ProjectsPage().filtersTableHeader.containsText("Applied Filters");
    });
  });

  context('Test Visiability of element in Table Element Contro', () => {
      it('Add project button ', () => {
        new ProjectsPage().addProjectButton.isVisible()
      });
      it('Dropdown With selected', () => {
        new ProjectsPage().dropdownWithSelected.isVisible()
      });
      it('Upload button', () => {
        new ProjectsPage().uploadButton.isVisible()
      });
      it('Input Search', () => {
        new ProjectsPage().searchInput.isVisible()
      });
      it('Search button ', () => {
        new ProjectsPage().searchButton.isVisible()
      });
  });

  context('Check correct text of elements', () => {
      it('Add Project button', () => {
         new ProjectsPage().addProjectButton.haveText(text.addProjectButton)
      });
      it('Dropdown With Selected', () => {
        new ProjectsPage().dropdownWithSelected.containsText(text.dropdownWithSelected)
      });
  });

  context('Check Placeholder elements', () => {
      it('Input Search', () => {
        new ProjectsPage().searchInput.havePlaceholder(text.searchInput)
      });
  });

  context('Check visibility And Text of Table`s elements', () => {
    it('Colum Name Action', () => {
        new ProjectsPage().columnNameAction.isVisible()
    });

    it('Colum Name ID', () => {
        new ProjectsPage().columnNameId.isVisible()
    });

    it('Colum Name Priority', () => {
        new ProjectsPage().columnNamePriority.isVisible()
    });
    
    it('Colum Name Name', () => {
        new ProjectsPage().columnNameName.isVisible()
    });
    
    it('Colum Name Status', () => {
        new ProjectsPage().columnNameStatus.isVisible()
    });

    it('Colum Name Start Date', () => {
        new ProjectsPage().columnNameStartDate.isVisible()
    });

    it('Colum Name Date Added', () => {
        new ProjectsPage().columnNameDateAdded.isVisible()
    });

    it('Colum Name Created By', () => {
        new ProjectsPage().columnNameCreatedBy.isVisible()
    });
});

context('Check Text of Table`s elements', () => {
    it('Colum Name Action has the correct text', () => {
        new ProjectsPage().columnNameAction.containsText(text.columnNameAction)
    });

    it('Colum Name ID has the correct text', () => {
        new ProjectsPage().columnNameId.containsText(text.columnNameId)
    });

    it('Colum Name Priority has the correct text', () => {
        new ProjectsPage().columnNamePriority.containsText(text.columnNamePriority)
    });
    
    it('Colum Name Name has the correct text', () => {
        new ProjectsPage().columnNameName.containsText(text.columnNameName)
    });
    
    it('Colum Name Status has the correct text', () => {
        new ProjectsPage().columnNameStatus.containsText(text.columnNameStatus)
    });

    it('Colum Name Start Date has the correct text', () => {
        new ProjectsPage().columnNameStartDate.containsText(text.columnNameStartDate)
    });

    it('Colum Name Date Added has the correct text', () => {
        new ProjectsPage().columnNameDateAdded.containsText(text.columnNameDateAdded)
    });

    it('Colum Name Created By has the correct text', () => {
        new ProjectsPage().columnNameCreatedBy.containsText(text.columnNameCreatedBy)
    });
});

});


/*

*/