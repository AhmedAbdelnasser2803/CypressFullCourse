it('getURL', ()=>
{
    // to get the url of the current location
    cy.visit('/');
    // this command get the url and print it on the consol 
    cy.url().should('contain' , 'index.html'); 
})