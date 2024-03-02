const baseUrl = 'http://localhost:5000'

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit(baseUrl)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon has abilities in place', function() {
    cy.visit(baseUrl)
    cy.contains('pikachu').click()
    cy.contains('static')
    cy.contains('lightning rod')
  })
})