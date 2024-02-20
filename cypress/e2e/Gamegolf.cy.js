/// <reference types = "cypress-xpath" />

import 'cypress-file-upload'

describe('GameGolf End to End Testing', () => {
    it('Signup', () => {

      cy.visit('https://staging-gamegolf.folio3.com/')
      cy.wait(100)
      cy.get('span:contains("GameGolf Dashboard")').click() // Tag with value
      cy.wait(1000)
      cy.get('a:contains("Sign Up")').click()
      cy.wait(1000)
      cy.get('input#email').type("rashidahmed+A12@folio3.com")
      cy.wait(200)
      cy.get('input#username').type("rashida12")
      cy.wait(200)
      cy.get('input#password').type("1234ASdf")
      cy.wait(2000)

      cy.get('span:contains("Continue")').click()
      cy.wait(1000)
      //cy.get('form').submit()
      cy.log()
      //cy.get('signup-form').submit()
      
      cy.wait(1000)
      cy.get('#distanceUnit').click()
      cy.wait(100)
      cy.get('div.ant-select-item-option-content:contains("Meters")').click()
      cy.wait(500)
      cy.get('.ant-switch-handle').click()
      cy.wait(1000)
      cy.get('span:contains("Continue")').click()
      cy.wait(1000)
      cy.get('#firstName').type('Rashid')
      cy.wait(200)
      cy.get('#lastName').type('Ahmed')
      cy.wait(1000)
      cy.get('.ant-picker-input').click()
      //y.get('#nbirthYear').click()
      cy.wait(1000)
      cy.get('td[title="2005"]').click()
      cy.wait(1000)
      cy.get('[name="country"]').click()
      cy.wait(1000)
      cy.get('#country').type('Pakistan{enter}') // Entering Pakistan then press enter key 
      cy.wait(1000)
      cy.get('#city').click()
      cy.wait(2000)
      cy.get('#city').type('karachi{enter}')
      cy.wait(1000)
      cy.get('#termsConditions').check()
      //cy.get('#country').select("Pakistan")
      //cy.wait('div.ant-space-item:contains("Pakistan")').click()
      cy.wait(500)
      cy.get('span:contains("Sign Up")').click()
      cy.get('span:contains("Registration successful")', { timeout: 100000 }).should('be.visible')
      cy.get('#email').type("rashidahmed+A10@folio3.com")
      cy.wait(1000)

    })


    it('FileUpload', () => {
    
        cy.visit('https://staging-gamegolf.folio3.com/')
        cy.wait(100)
        cy.get('span:contains("GameGolf Dashboard")').click() // Tag with value
        cy.wait(1000)
        cy.get('#email').type("rashidahmed+A10@folio3.com")
        cy.wait(500)
        cy.get('#password').type("1234ASdf")
        cy.wait(1000)
        cy.get('button[type="submit"]').click()
        cy.wait(10000)
        cy.visit('https://staging-gamegolf.folio3.com/account-settings')
        cy.wait(5000)
        cy.get('input[type="file"]').attachFile('logo.png')
        cy.wait(10000)
        cy.get('button[type="submit"]').click()
        cy.wait(10000)
    })



  })
