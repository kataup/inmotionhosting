export default class MenuBar {
    getMenuBar() {
        return cy.get('div[id="navbarNavDropdown"]')
    }

    getVpsHosting() {
        return cy.contains('a','VPS Hosting')
    }
    cart() {
        return cy.get('[class="nav-link go-to-cart"]')
    }
}