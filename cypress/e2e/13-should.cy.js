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


// it ('should have text',()=>{
//     cy.visit('/');
//     // check the element contain the txt like 'Welcome to Cypress Tutorials'
//     cy.get('[id="welcome"]').should('have.text',
//         'Welcome to Cypress Tutorials')
// })


// it ('should contain command',()=>{
//     cy.visit('/');
//     // check the part of the txt 
//     cy.get('[id="welcome"]').should('contain',
//         'Welcome to')
// })

it ('should contain txt',()=>{
    cy.visit('/');
    // check the part of the txt 
    cy.get('[id="welcome"]').should('contain',
        'Welcome to')
})


it('check the txt related to specific class',()=>{
    cy.visit('/');
    // get the element at first then check the class 
    cy.contains('wdio').should('have.class','web');
    ;
})


it('should have css command',()=>{
    cy.visit('/');
    // get the element at first then check the class 
    cy.get('.focus').focus().should('have.css','background-color','rgb(255, 0, 0)');
    /**
     * we check any element by css 'style' not background only
     */
}) 


it.only('should have attribute command',()=>{
    cy.visit('/');
    // to check that the element have the attribute like type and class 
    //use this command to check the element have the all class like html code and we need to write all class 
    // if we missed one of this class system appear error 
    cy.get('.invoice-button').first().should('have.attr','class','btn btn-primary invoice-button');
    //if we need to check the element have the one of the group of class we can use this command 
    cy.get('.invoice-button').first().should('have.attr','class').and('include','btn') ;
}) 
