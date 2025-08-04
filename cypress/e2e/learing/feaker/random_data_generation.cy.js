//import { faker } from "@faker-js/faker";
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? Česká lokalizace
describe("Data generation with Faker", () => {
  it("Generate unique test data", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.exampleEmail({
      firstName: firstName,
      lastName: lastName,
    });
    const street = faker.location.streetAddress();
    const city = faker.location.city();

        cy.log(
      `Vygenerovaná test data: \n - jméno: ${firstName} \n - příjmení: ${lastName} \n email: \n ${email}`
    );
        cy.log(`Adresa: ${street}, ${city}`)
  });
});
