// test case fore leaning how to click on the button 
it ('click action',()=>{
    cy.visit('/');
    // - get the last element of the list and click on it 
    // cy.get('.invoice-button').last().click();
    // - click on the last element but using different allocator 
    // cy.get('[value="Download Invoice"]').last().click();
    // - click on all button on the list at the same time 
    cy.get('.invoice-button').click({multiple: true});
    // - force click on the hidden Btn in html page 
    cy.get('.hidden-button').click({force: true});
})