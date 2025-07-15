// learning 'type' command

it('type command',()=>{
    // we can type on the field using type command 
    cy.visit('/');
    // -set the email and password on the field using 'type' command 
    // -we can add option with the words 
    cy.get('#inputEmail').type('ahmed.abdelnasser2803@gmail.com{enter}');
    cy.get('#inputPassword').type('Test123');

    // -try to type on the hidden field by using force option 
    cy.get('#coverdInput').type('testing mode',{
        force: true,
        delay: 1000
    });

})