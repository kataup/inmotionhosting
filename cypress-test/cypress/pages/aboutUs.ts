export default new class AboutUs {

    companyButton() {
        return cy.contains('[id="companyDropDown"]')
    }

    aboutUs() {
        return cy.contains('span', 'About Us')
    }

    contactMail() {
        return cy.contains('a', 'execteam@inmotionhosting.com')
    }

    joinTheNewsletter() {
        return cy.get('input[id="email-38a7ac7c-5a9f-41d5-8964-2c523a51aead"]')
    }

    newsletter(email: string) {
    this.joinTheNewsletter().type(email)
    }

    aboutUs2() {
        this.companyButton().click()
        this.aboutUs().click()
        this.contactMail().click()
    }
}