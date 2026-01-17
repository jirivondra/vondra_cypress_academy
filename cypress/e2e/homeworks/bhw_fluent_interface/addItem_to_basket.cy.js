import { ShoppingProcess } from "../../../../page-objects/eshop/shopping_process";


const shoppingProcess = new ShoppingProcess(
    "https://automationteststore.com/",
    ".thumbnails",
    'a',
    "Skinsheen Bronzer Stick",
    ".cart"
);

describe('Add Item To Basket Test', () => {
    it('Should successfully add an item to the basket and navigate to the cart', () => {
        shoppingProcess.visitPage()
            .addItemToBasket()
            .goToCart();
    });
});