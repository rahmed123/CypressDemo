
/// <reference types = "cypress-xpath" />


describe('Radio_Checkboxes', () => {
    it('Visit Orange HRM', () => {
      // Visit Orange HRM
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.title().should('eq','OrangeHRM')
    })


    it('Login', () => {
        // Enter Username and Password
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.wait(5000)
         //cy.get('[name="username"]').should('be.visible')
         cy.get('[name="username"]').type('Admin')  
         cy.get('[name="password"]').type('admin123')
         cy.wait(2000)
         cy.get('[type="submit"]').click()
         //cy.get('[class="oxd-userdropdown-name"]').should('contain','Paul')
         cy.wait(2000)
         cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click() // get the locator from Cypress locators
         cy.wait(5000)
        // cy.get('input[type="radio"][value="1"]').uncheck()
        
         //cy.get('input[type="radio"][value="2"]').should('be.visible').check({ force: true });
         cy.scrollTo(0, 500) // Scroll the window 500px down
         cy.wait(2000)
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
         cy.wait(2000)
         cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
         cy.contains('Afghan').click()
         //cy.get('.oxd-select-text oxd-select-text--active').click()
         cy.wait(1000)



         //cy.get('.oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input').should ('be.visible')

cy.wait(2000)
        // cy.get('span:contains("Female")').check();
         //cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').check()

      })





})
