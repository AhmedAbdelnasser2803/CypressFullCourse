// we use get command to find an element or elements 

// we can find the element using tag name 

// if we need to run the only one test case -> write it.only 


it('find element by tag name',()=>{
    cy.visit('/');

    // put the tag name inside the get command 
    // this command will return all elements have this tag name 
    cy.get('h1');
})


it('find element by id',()=>{
    cy.visit('/');

    // put the tag name inside the get command 
    // this command will return the element have the course in id
    // to write the id of element on get function we need to write # before id 
    cy.get('#courses');
})

it('find element by class name', ()=>{
    cy.visit('/');

    // can get the element by the class name with using . before the class name
    cy.get('.course-list');
    // if we have more than class name of the element we can use the first or second name 
    cy.get('.list1');
    cy.get('.web');
    // can get the specific element using the two class name in the same command without space 
    cy.get ('.list1.web');
})

it('find element by attribute', ()=>{
    // to find any attribute , use []
    cy.visit('/');
    cy.get('[value="Download Invoice"]');
    // we can use this method with any attribute 


})

it('find the first element from the list of element', ()=>{
    cy.visit('/');
    // use first command to get the first element of the list of element 
    // please use 'first()' command 
    cy.get('[value="Download Invoice"]').first();
})

it('find the last element from the list of element', ()=>{
    cy.visit('/');
    // use last command to get the first element of the list of element 
    // please use 'last()' command 
    cy.get('[value="Download Invoice"]').last();
})

it('find the last element from the list of element', ()=>{
    cy.visit('/');
    // use last command to get the last element of the list of element 
    // please use 'last()' command 
    cy.get('[value="Download Invoice"]').last();
})
it('find the element by index', ()=>{
    cy.visit('/');
    // use eq function to get the element by index 
    // use 'eq()' command 
    cy.get('[value="Download Invoice"]').eq(3);
})

it('use filter command to get the element with condition', ()=>{
    // can find the element and filter again to get the correct element
    // can use 'filter()' command
    cy.visit('/');
    cy.get('li').filter('.web');
})


it('use children method to get all children of the tag', ()=>{
    cy.visit('/');
    // 
    cy.get('.course-list').children();  
    cy.get('.course-list').children('.web');
    cy.get('.course-list').children('.web').last();
    cy.get('.course-list').children('.web').first();
    cy.get('.course-list').children('.web').eq(2);
})

it('use find method to get element', ()=>{
    cy.visit('/');
    // we use find to get children of children 
    // this method like the 'children()' method but it in deep 
    cy.get('.course-list').find('.web');  
})

it('find element using parent method', ()=>{
    cy.visit('/');
    // to find the first parent of the children using parent method 
    // at first get the children of the parent then get the parent 
    cy.get('.list1.web').parent();
})

it('find all parent of the element using parents method', ()=>{
    cy.visit('/');
    // to find the first parent of the children using parent method 
    // at first get the children of the parent then get the parent 
    cy.get('.list1.web').parents();
})


it('find the elements with the same level (siblings)', ()=>{
    cy.visit('/');
    // get the all elements that is in the same level 
    // use 'siblings()' method to get this  
    cy.get('.list1.web').siblings();
})


it.only('find element by the text', ()=>{
    // find element by that text that contain 
    // use 'contains()' to get it 
    cy.visit('/');
    cy.contains('Welcome to Cypress Tutorials');
})
