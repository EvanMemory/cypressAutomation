describe('CSSLocators', () => {

it("csslocators", () => {
    cy.visit('https://magento.softwaretestingboard.com/?ref=hackernoon.com')
    // cy.get("#search").type("T-shirts") // id
    // cy.get(".input-text").type("T-shirts") // class
    cy.get("input.input-text[name='q']").type("T-shirts") // tag, class, attribute
    cy.get("[title='Search']").click() // attribute
    cy.get(".base").contains("Search results for: 'T-shirts'") // class
})


})