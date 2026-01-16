// user_api.js
// cypress/api/tegb

import { customElement } from "../../e2e/helpers/custom_element";

// ? My budeme používat jen jednu třídu, protože budeme pracovat jen s uživatelem. API objekty ale dělíme stejně jako Page Objecty, typicky podle skupin endpointů, například: UserApi, AccountsApi, PaymentApi
export class UserApi {
  constructor() {
    this.apiUrl = Cypress.env("tegb_api_url");
    this.userIdAlias = customElement('@userId')
    this.accessTokenAlias = customElement('@accessToken')
    this.userId = customElement('response.body.userId')
    this.accesToken = customElement('response.body.access_token')

  }

    setAccessToken(accessToken) {
    cy.setCookie( "access_token", accessToken)
    return this
    }

  createUserIdAlias(data, alias) {
      cy.wrap(data).as(alias)
      return this
  }

  creatAccesTokenAlias(data, alias) {
          cy.wrap(data).as(alias)
          return this
  }


  register(username, password, email) {
    // ? Klíčové slovo return nám vrátí výsledek requestu do místa odkud pak můžeme psát expecty nebo přepoužívat data. Testovat můžeme buď pomocí další metody (například registerCheck) nebo přímo v testu.
    return cy.request({
      method: "POST",
      url: this.apiUrl + "user/register",
      body: {
        username,
        password,
        email,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: this.apiUrl + "auth/login", 
      body: {
        username,
        password,
      },
    });
  }
}
