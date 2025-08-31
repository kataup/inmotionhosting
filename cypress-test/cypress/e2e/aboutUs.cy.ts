import AboutUs from "../pages/aboutUs"

describe('About Us test', () => {
    beforeEach(() => {
        cy.visit('https://www.inmotionhosting.com/')
    })
})
it('Should find About us page and email contact', () => {
    AboutUs.aboutUs2()
    cy.fixture('email').then((emailData) => {
        const email = emailData.email
        AboutUs.newsletter(email)
    })
})