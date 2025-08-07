describe('My First Test', () => {
 it('Visits a webpage and checks title', () => {
 cy.visit('https://example.com')
 cy.get('h1').contains('Example Domain')
 })
})