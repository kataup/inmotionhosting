import AboutUs from "../pages/aboutUs"

describe('About Us test', () => {
    it('Should find about us page', ()=> {
cy.visit('https://www.inmotionhosting.com/')
AboutUs.companyButton().click()
    })
})