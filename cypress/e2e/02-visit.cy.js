
// visit => can navigate to URL
it('should visit google',function(){
    //visit google site
    //cy.visit("www.google.com");
    //we can use visit command to open the local host also

    // we can visit the html file so we darg and drop index.html file to the project 
    //cy.visit('cypress/support/index.html');

    //-cypress recommend to set the base url in the cypress.json file 
    cy.visit("/");

    // we can use optional on visit command 
    /*
        1- we can add url as optional (second paramter)
        2- we can send query using qs
        3- you can visit command through the url "https://docs.cypress.io/api/commands/visit"
    */
   cy.visit('/',{
    qs:{
        q:'cypress',
        hatem:'qacart'
    }
   })


})