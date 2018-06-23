/// <reference types="Cypress" />

context('Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('found the expected page title', () => {
    cy.title().should('equal', 'Svelte + Redux Shopping Cart App')
  })
})
