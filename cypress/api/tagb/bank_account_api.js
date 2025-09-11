export class BankAccount {
    constructor() {
        this.apiUrl =  Cypress.env("tegb_api_url") + 'accounts';  
    }

    createAccount(requestData) {
        return cy.request({
            method: "POST",
            url: this.apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${requestData.accessToken}`
            },
            body: {
                "userId": requestData.userId,
                "accountType": requestData.accountType,
                "transactionLimits": {
                    "dailyLimit": requestData.dailyLimit,
                    "monthlyLimit": requestData.monthlyLimit
                },
                "deposit": requestData.deposit,
                "createdAt": requestData.createAtTime
            }
        });
    }
}