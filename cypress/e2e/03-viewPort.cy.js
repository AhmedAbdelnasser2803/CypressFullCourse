
/* 
    - this test case test multi view of the website 
    - we use foreach loop to test all views and make code more usability 
*/

['samsung-note9','ipad-mini','macbook-13'].forEach(viewport => {

    it('we should be able to open website in different views '+viewport , ()=>{
    // -we use view port to test the width and hight of the test runner
    // -usefully to test our application in different viewport
    cy.viewport(viewport)
    cy.visit('http://10.0.2.15:8080/index.html');


    // - we can assign width and hight by the model of device  
    

}
)
})

