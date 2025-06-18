it('hover over',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    cy.get('[class="trigger"]').trigger("mouseover");
})

it('hover leave',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    // we need to focus the element at first then blur it 
    cy.get('[class="trigger"]').trigger("mouseover");
    cy.get('[class="trigger"]').trigger("mouseout");
    
})

it('long press',()=>{
    cy.visit('http://10.0.2.15:8080/index.html');
    // long press  
    cy.get('[class="trigger"]').trigger("mousedown");
    cy.wait(5000);
    cy.get('[class="trigger"]').trigger("mouseup");
})