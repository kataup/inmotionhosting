
export default new class CartPage {

    chooseDomain() {
        return cy.contains('button', 'Choose my domain later')
    }

    accountElement() {
        return cy.contains('span', 'Account')
    }

    inputEmail() {
        return cy.get('input[id="mat-input-6"]')
    }

    inputPassword() {
        return cy.get('input[id="mat-input-7"]')
    }
    inputFirstName() {
        return cy.get('input[id="mat-input-1"]')
    }

    inputLastName() {
        return cy.get('input[id="mat-input-7"]')
    }

    openCountryDropdown() {
        return cy.get('.iti__selected-flag').click()
    }

    typePhoneNumber(number: string) {
        return cy.get('input[type="tel"].contact_form').clear().type(number)
    }

    inputAdressLine1() {
       return cy.get('input[id="mat-input-12"]')
    }

    inputCity() {
        return cy.get('input[id="mat-input-13"]')
    }

    inputState() {
        return cy.get('input[id="mat-input-14"]')
    }

    inputPostalCode() {
      return cy.get('input[id="mat-input-4"]')
    }

    inputCountry() {
        return cy.get('input[id="mat-input-5"]') 
    }

    clickButton() {
        this.chooseDomain().click()
    }
    
 fillForm({
    email, password, firstName, lastName,
    address1, city, state, postalCode, country
  }: { email: string, password: string, firstName: string, lastName: string, address1: string, city: string, state: string, postalCode: string,country: string
  }) {
    this.inputEmail().clear().type(email)
    this.inputPassword().clear().type(password)
    this.inputFirstName().clear().type(firstName)
    this.inputLastName().clear().type(lastName)
    this.inputAdressLine1().clear().type(address1)
    this.inputCity().clear().type(city)
    this.inputState().clear().type(state)
    this.inputPostalCode().clear().type(postalCode)
    this.inputCountry().clear().type(country)
  }
  }


