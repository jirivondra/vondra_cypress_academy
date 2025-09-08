import { ShoppingBasket } from "../../../../page-objects/eshop/basket_page";
import { fakerCS_CZ as faker } from "@faker-js/faker"

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
};

describe('', () => {
const shoppingBasket = new ShoppingBasket()
    beforeEach(()=>{
       shoppingBasket.visitHp()
    })
    it('Registered, and item to basket and delate it', () => {
    shoppingBasket.visit()
    shoppingBasket.fillFrom(testData)
    shoppingBasket.clickContinue()
    shoppingBasket.clickLogo()
    shoppingBasket.addToCard()
    shoppingBasket.openBasket(testData.buttonBasketName)
    shoppingBasket.checkUnitPrice(testData.unitPrice)
    shoppingBasket.checkQuantityValue(testData.quantity.attribute, testData.quantity.value)
    shoppingBasket.checkTotalPrice(testData.unitPrice)
    shoppingBasket.checkModel(testData.model)
    shoppingBasket.delateItem()
    });
});
