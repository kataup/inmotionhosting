export default new class MenuBar {
    getMenuBar() {
        return cy.get('div[id="navbarNavDropdown"]')
    }

    cart() {
        return cy.get('[class="nav-link go-to-cart"]')
    }
}