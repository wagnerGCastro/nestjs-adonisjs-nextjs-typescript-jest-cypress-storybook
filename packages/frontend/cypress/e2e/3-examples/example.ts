
// load type definitions from Cypress module
// <reference types="cypress" />

describe('Cypres TS', () => {
  it.skip('Should go to go Google', () => {
    cy.google()
  })

  it.skip('should change light/dark theme on site', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o Tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o Tema/i).click()
    cy.get('.dark').should('exist')
  })

  it('should visit on Games', () => {
    cy.visit('https://wongames.willianjusten.com.br')

    cy.findByText(/Esse é um site de estudos!/i).should('exist')
  })

})
