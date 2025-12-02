
import { Form } from "../../../page-objects/eshop/form";
import { fakerCS_CZ as faker } from "@faker-js/faker";

const vysocinaData = {
    cities: ["Jihlava", "Trebic", "Havlickuv Brod", "Pelhrimov", "Zďar nad Sazavou"],
    zipcodes: ["58601", "67401", "58001", "39301", "59101"],
    region: "901"
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


const testData = {
    firstName: {
        selector: '#AccountFrm_firstname',
        data: faker.person.firstName()
    },
    lastName: {
        selector: '#AccountFrm_lastname',
        data: faker.person.lastName()
    },
    email: {
        selector: '#AccountFrm_email',
        data: faker.internet.email()
    },
    telephone: {
        selector: '#AccountFrm_telephone',
        data: faker.phone.number('+420 ### ### ###')
    },
    fax: {
        selector: "#AccountFrm_fax",
        data: faker.phone.number('+420 ### ### ###')
    },
    company: {
        selector: '#AccountFrm_company',
        data: faker.company.name()
    },
    address1: {
        selector: '#AccountFrm_address_1',
        data: faker.location.streetAddress({ useFullAddress: true })
    },
    address2: {
        selector: '#AccountFrm_address_2',
        data: faker.location.streetAddress({ useFullAddress: true })
    },
    city: {
        selector: '#AccountFrm_city',
        data: getRandomElement(vysocinaData.cities)
    },
    regionState: {
        selector: '#AccountFrm_zone_id',
        data: vysocinaData.region,
        textSelect: 'Vysocina'
    },
    zipCode: {
        selector: '#AccountFrm_postcode',
        data: getRandomElement(vysocinaData.zipcodes)
    },
    country: {
        selector: '#AccountFrm_country_id',
        data: "56",
        textSelect: "Czech Republic"
    },
    loginName: {
        selector: '#AccountFrm_loginname',
        data: faker.internet.username()
    },
    password: {
        selector: '#AccountFrm_password',
        data: faker.internet.password({ length: 20 })
    },
    confirmPassword: {
        selector: '#AccountFrm_confirm',
    },
    newslatterSubscribe: {
        selector: 'input[type="radio"][name="newsletter"]',
        data: '0'
    },
    agreeCheckbox: {
        selector: '#AccountFrm_agree',
    },
    successMessage: {
        selector: '.maintext',
        data: 'Your Account Has Been Created!'
    }
    
}

describe('E-shop registration', () => {
   before(()=>{
    const form = new Form()
    form.openEshop()
    form.clickOnButtonRegistration()
    form.clickSubmitButton()
   })
    it('Fill Form and submit', () => {
        new Form()
            .fillRegistrationForm(testData)
   });
});

