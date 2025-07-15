it('double click command',()=>{
    cy.visit('/');
    cy.get('[value="Click me"]').dblclick();
})