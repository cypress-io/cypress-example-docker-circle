describe('a-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || 'index.html')
    })

    it('has h2', () => {
      cy.contains('h2', 'test')
    })
  })
})
