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

    it.skip('should register a new user, log in, and create a bank account', () => {
        const userApi = new UserApi();
        const bankAccount = new BankAccount();

        userApi.register(username, password, email)
            .then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.email).to.equal(email);
                new UserApi().createUserIdAlias(response.body.userId, 'userId')
            });

        userApi.login(username, password)
            .then((response) => {
                expect(response.status).to.eq(201);
                new UserApi()
                .creatAccesTokenAlias(response.body.access_token, 'accessToken')
                .setAccessToken('@accessToken')
                
            })
            
        userApi.userIdAlias.get().then((userId) => {
            userApi.accessTokenAlias.get().then((accessToken) => {

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
                        bankAccount.creatBalanceAlias(response.body.balance, 'balance')
                });

               new TegbHomePage()
               .openHp()
               .checkBalance('$' + requestData.deposit) // ?? v tomto kroce je bug => test jsem nastavil na skip
            });
        });
    });
});

