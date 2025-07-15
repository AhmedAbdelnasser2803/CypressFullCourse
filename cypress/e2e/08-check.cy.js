it('check command',()=>{
    cy.visit('/');
    cy.get('#Nuts').check();
    cy.get('#Nuts').uncheck();
})