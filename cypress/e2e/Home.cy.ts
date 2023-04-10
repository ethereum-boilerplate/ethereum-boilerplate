describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Successfully renders "Ethereum Boilerplate" header', () => {
    cy.get('h2:contains("Ethereum Boilerplate")');
  });
});
