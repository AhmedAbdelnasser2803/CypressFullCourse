

it('we should be able to open website in different views' , ()=>{
    // -we use view port to test the width and hight of the test runner
    // -usefully to test our application in different viewport
    
    cy.viewport(550,750);
    cy.visit('http://10.0.2.15:8080/index.html');

    cy.viewport('samsung-note9')


}
)