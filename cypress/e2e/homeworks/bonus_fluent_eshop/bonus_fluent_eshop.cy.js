import { BasePage } from "../../../../page-objects/common/base_page";
import { ShoppingBasket } from "../../../../page-objects/eshop/basket_page";
import { fakerCS_CZ as faker } from "@faker-js/faker"

import { RegistrationForm } from "../../../../page-objects/eshop/registration_form_page";
import { HomePageEshop } from "../../../../page-objects/eshop/homepage";
import { RegisteredPage } from "../../../../page-objects/eshop/registered_page";

const testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    password: faker.internet.password(),
    radioSubscription: 'Yes',
    unitPrice: '$101.00',
    quantity: {
        attribute: 'value',
        value: '1'
    },
    model: 'product 11',
    buttonBasketName: 'View Cart',
    headlineText: 'Your Account Has Been Created!',
    alertText: ' Success: You have added ',
    statusText: 'Your shopping cart is empty!'

};

describe('Eshop: Registration and shopping cart functionality', () => {
const shoppingBasket = new ShoppingBasket()
const homepage = new HomePageEshop()
const registrationForm  = new RegistrationForm()
const registeredPage = new RegisteredPage()
    beforeEach(()=>{
       homepage.visit()
    })
    it('Should register a new user, add an item to the basket, verify it, and delete it', () => {
    registrationForm.visit()
    registrationForm.fillFrom(testData)
    registeredPage.checkHeadLine(testData.headlineText)
    registeredPage.clickLogo()
    homepage.addToCard()
    homepage.checkAlert(testData.alertText)
    shoppingBasket.visit()
    shoppingBasket.checkBasket(testData)
    shoppingBasket.delateItem()
    shoppingBasket.checkStatus(testData.statusText)
    });
});
