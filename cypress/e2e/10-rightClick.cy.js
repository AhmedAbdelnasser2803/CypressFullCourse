it('right click command',()=>{
    cy.visit('/');
    cy.get('[value="Click me"]').rightclick();
})