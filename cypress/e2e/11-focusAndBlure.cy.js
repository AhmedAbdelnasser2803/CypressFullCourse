it('focus command',()=>{
    cy.visit('/');
    cy.get('[class="focus blur"]').focus();
})

it('blur command',()=>{
    cy.visit('/');
    cy.get('[class="focus blur"]').focus();
    cy.get('[class="focus blur"]').blur();
})