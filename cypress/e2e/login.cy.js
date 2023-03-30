describe('template spec', () => {
  it('Loads successfully', () => {
    cy.visit('https://ptodemo.labdeque.com/login');
    // cy.url
  });

  it('Can authenticate', () => {
    cy.visit('https://ptodemo.labdeque.com/login');
    cy.get('input#username').type('jmcclure');
    cy.get('input#password').type('123@123');
    cy.get('button').click();
  });
})