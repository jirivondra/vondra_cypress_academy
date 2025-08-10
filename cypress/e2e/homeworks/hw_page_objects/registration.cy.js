import { Homepage } from "../../../../page-objects/eshop/home_page";

const testData = {
   firstName: 'Jiří',
   lastName: 'Vondra',
   email: 'voji1@yahoo.com',
   phone: '723646014',
   password: 'Heslo123Heslo',
};

describe('Registration Form Test', () => {
    it('Should register a new user using a loop', () => {
        new Homepage()
            .visitPage()
            .openRegisterForm()
            .fillFields(testData)
            .submitForm();
    });
});