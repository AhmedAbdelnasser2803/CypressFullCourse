it('hover over',()=>{
    cy.visit('/');
    cy.get('[class="trigger"]').trigger("mouseover");
})

it('hover leave',()=>{
    cy.visit('/');
    // we need to focus the element at first then blur it 
    cy.get('[class="trigger"]').trigger("mouseover");
    cy.get('[class="trigger"]').trigger("mouseout");
    
})

it('long press',()=>{
    cy.visit('/');
    // long press  
    cy.get('[class="trigger"]').trigger("mousedown");
    cy.wait(5000);
    cy.get('[class="trigger"]').trigger("mouseup");
})