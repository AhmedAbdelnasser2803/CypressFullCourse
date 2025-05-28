it ('click action',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    // cy.get('.invoice-button').last().click();
    // cy.get('[value="Download Invoice"]').last().click();
    cy.get('.invoice-button').click({multiple: true});
    cy.get('.hidden-button').click({force: true});
})