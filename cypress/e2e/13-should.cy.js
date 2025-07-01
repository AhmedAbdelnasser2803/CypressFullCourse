it('should be visible command',()=>{
     cy.visit('http://10.0.2.15:8080/index.html');
    // we need to focus the element at first then blur it 
    cy.get('[name="courses"]').should('be.visible');
}) 

it('should not be visible command',()=>{
     cy.visit('http://10.0.2.15:8080/index.html');
    // we need to focus the element at first then blur it 
    cy.get('[name="courses"]').should('not.be.visible');
}) 