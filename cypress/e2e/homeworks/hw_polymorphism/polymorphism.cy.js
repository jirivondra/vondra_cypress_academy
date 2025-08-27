import { Homepage } from "../../../../page-objects/eshop/home_page";

const product = {
    selectProduct: "//img[@title='iPhone']",
    text: ".intro",
    description: "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email." 
};

describe('Product Page Tests', () => {
    it('Select product (iPhone), check description and return to homepage via logo', () => {
        new Homepage()
            .visitPage()
            .selectItem(product.selectProduct)
            .textControl(product.text, product.controlText)
            .clickLogo();
    });
});