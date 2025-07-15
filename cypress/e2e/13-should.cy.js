it('should be visible command',()=>{
     cy.visit('/');
    // check the element is not visible because the element is visible 
    cy.get('[name="courses"]').should('be.visible');
})


// it('should not be visible command',()=>{
//      cy.visit('/');
//     // check the element is not visible because the element is not visible 

//     cy.get('[name="courses"]').should('not.be.visible');
// }) 


it ('should have text',()=>{
    cy.visit('/');
    // check the element should have element 
    cy.get('[id="welcome"]').should('have.text',
        'Welcome to Cypress Tutorials')
})