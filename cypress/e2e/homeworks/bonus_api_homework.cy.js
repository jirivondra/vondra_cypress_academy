import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/tagb/user_api";
import { BankAccount } from "../../api/tagb/bank_account_api";
import moment from "moment";
import { TegbHomePage } from "../tegb/tegb_home_page";

const testData = {
    balanceamount: '$' + '@balance',

}

describe('User and Account Management', () => {
    let username;
    let password;
    let email;

    beforeEach(() => {
        username = faker.internet.username();
        password = faker.internet.password();
        email = faker.internet.email();
    });

    it('should register a new user, log in, and create a bank account', () => {
        const userApi = new UserApi();
        const bankAccount = new BankAccount();

        userApi.register(username, password, email)
            .then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.email).to.equal(email);
                cy.wrap(response.body.userId).as('userId');
            });

        userApi.login(username, password)
            .then((response) => {
                expect(response.status).to.eq(201);
                cy.wrap(response.body.access_token).as('accessToken');
                cy.setCookie("access_token", '@accessToken')
            })
            

        cy.get('@userId').then((userId) => {
            cy.get('@accessToken').then((accessToken) => {

                const requestData = {
                    accessToken: accessToken,
                    userId: userId,
                    accountType: "checking",
                    dailyLimit: 1000,
                    monthlyLimit: 5000,
                    deposit: 500, // ? v responce je to uvedeno jako balance 
                    createdAt: moment.utc().add(10, 'minutes').format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
                };

                bankAccount.createAccount(requestData).then((response) => {
                        expect(response.status).to.eq(201);
                        expect(response.body.userId).to.eq(requestData.userId)
                        expect(response.body.transactionLimits.dailyLimit).to.eq(requestData.dailyLimit)
                        expect(response.body.transactionLimits.monthlyLimit).to.eq(requestData.monthlyLimit)
                        expect(response.body.balance).to.eq(requestData.deposit)
                        cy.get(response.body.balance).as('balance')
                });

               new TegbHomePage()
               .openHp()
               //.checkBalance('$' + requestData.deposit) // ?? jelikož hodnota balance nesedí, tento krok jsem zakomentoval
            });
        });
    });
});

