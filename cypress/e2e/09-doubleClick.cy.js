it('double click command',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    cy.get('[value="Click me"]').dblclick();
})