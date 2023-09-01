describe('My First Test', () => {
    it('verify title-positive', () => {
        cy.visit("https://www.target.com/")

        cy.title().should('eq', 'Target : Expect More. Pay Less.')
    })

    it('verify title-negative', () => {
        cy.visit("https://www.target.com/")

        cy.title().should('eq', 'Target : Expect More. Pay Less.123')
    })
  })