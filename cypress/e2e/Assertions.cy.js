
describe('Locators', () => {
    it('Implicit Assertions', () => {


        // Should Assertions with keywords : "include,eq and contain" assertion on URL
     // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     // cy.url().should('include','orangehrm')
     // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     // cy.url().should('contain','rce-demo')
    

       // Capturing URL just one time and applying multiple assertions

       //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       //cy.url().should('include','orangehrm')
       //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       //.should('contain','rce-demo')

      
      // Multiple assertions using keyword: and
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.url().should('include','orangehrm')
       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain','rce-demo')
       //.and('not.contain','demo')

       cy.get('.orangehrm-login-branding > img').should('be.visible')
       .and('exist')

       cy.xpath('//a').should('have.length','5')
       cy.get('[placeholder="Username"]').type('Admin')
       cy.get('[placeholder="Username"]').should('have.value','Admin')
       

    })
})
