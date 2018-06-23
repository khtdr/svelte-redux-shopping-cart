/// <reference types="Cypress" />

const PRODUCT_ITEM_COUNT = 3

context('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('the cart is empty', () => {
    cy.get('p').contains('Total: $0.00')
  })
  it(`there are ${PRODUCT_ITEM_COUNT} product items`, () => {
    cy.get(':nth-child(4) > .svelte-u3yj44 > div').then($cursor => {
      expect($cursor.length).to.eq(PRODUCT_ITEM_COUNT)
    })
  })
  it('each has an add-to-cart button', () => {
    cy.get(':nth-child(4) > .svelte-u3yj44 > div button').then($cursor => {
      expect($cursor.length).to.eq(PRODUCT_ITEM_COUNT)
    })
    cy.get(':nth-child(4) > .svelte-u3yj44 > div button').invoke('text').should(text => {
      expect(text).to.match(/(Add to Cart)+/)
    })
  })
  it('that can be clicked to fill cart', () => {
    cy.get(':nth-child(4) > .svelte-u3yj44 > div button').click({multiple:true})
    cy.get('p').contains('Total: $531.47')
  })
})
