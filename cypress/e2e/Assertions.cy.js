describe("Assertions demo", () => {

    it("Implicit assertions", () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/")

        /*
        cy.url().should("include", "softwaretestingboard.com") // should
        cy.url().should("eq", "https://magento.softwaretestingboard.com/customer/account/login/")
        cy.url().should("contain", "magento")
        */

        /*
        cy.url().should("include", "softwaretestingboard.com")
        .should("eq", "https://magento.softwaretestingboard.com/customer/account/login/")
        .should("contain", "magento")
        */

        cy.url().should("include", "softwaretestingboard.com")
        .and("eq", "https://magento.softwaretestingboard.com/customer/account/login/")
        .and("contain", "magento")
        .and("not.contain", "magenta")

        cy.title().should("include", "Customer")
        .and("eq", "Customer Login")
        .and("contain", "Login")

        cy.get('img').should("be.visible")
        .and("exist")

        cy.get("#email").type("address@email.com")
        cy.get("#email").should("have.value", "address@email.com")
    })

    it("explicit assertions", () => {

        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/")
        cy.get("#email").type("address@email.com")
        cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Password123")
        cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click()

        let expectedName = "My Account"

        cy.get(".base").then( (loginText) => {
            let actualName = loginText.text()

            //BDD Style
            expect(actualName).to.equal(expectedName)
            expect(actualName).to.not.equal(expectedName + "asdf")

            //TDD Style
            assert.equal(actualName, expectedName)
            assert.notEqual(actualName, expectedName + "asdf")
        })
    })
})