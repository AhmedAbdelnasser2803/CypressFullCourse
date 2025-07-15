// -select command to select option on drop down list 

it("select command",()=>{
    /* 
    - we can select the option using 
    1- value     2-index    3-text 
    */
    cy.visit('/');
    // -get by value 
    cy.get('#courses').select('cypress');
    //  -get by index 
    cy.get('#courses').select(1);
    // -get by txt
    cy.get('#courses').select('appium');

})