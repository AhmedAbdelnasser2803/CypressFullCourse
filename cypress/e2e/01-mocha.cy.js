/// <reference types="cypress" />

/*describe is like the suit that conatian multible of test cases */
// we can replace the "describe"to "context"
describe('login functionality', ()=>{



    //"before"=>excute the function before the suite 
    before(()=>{
        cy.log('i am inside the before');
    });
    // "beforeEach"=> excute the function before eache testcase
    beforeEach(()=>{
        cy.log('i am inside the before each');
    });
    //"after"=>excute the function after the suite 
    after(()=>{
        cy.log('i am inside the after');
    });
    // "afterEach"=> excute the function after eache testcase
    afterEach(()=>{
        cy.log('i am inside the after each');
    });


    //it -> describe of test case in mocha 
    // it -> two argument , the first argument is the name of test case , the second arg is the steps 

    it("should login with valid username and password",function(){
        cy.log('test case 1');

    })



    it("should not login if the username is wrong",()=>{
        cy.log('test case 2');

    })

    it("should be able to reset the password",()=>{
        cy.log('test case 3');
    })

    it("should be able to order a new food",()=>{
        cy.log('test case 4');
    })


})