it('focus command',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    cy.get('[class="focus blur"]').focus();
})

it('blur command',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    cy.get('[class="focus blur"]').focus();
    cy.get('[class="focus blur"]').blur();
})