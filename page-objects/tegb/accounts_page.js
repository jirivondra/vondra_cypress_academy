import { customElement } from "../../cypress/e2e/helpers/custom_element";

export class AccountsPage {
  constructor() {
    this.titleHeader = customElement('[data-testid="title"]');
  }

  titleHaveText(titleText) {
    this.titleHeader.haveText(titleText);
    return this;
  }
}
