
/// <reference types = "cypress-xpath" />
describe('Locators', () => {
    it('test1', () => {

      cy.visit('https://www.gamegolf.com')

      
      

      cy.get('span:contains("GameGolf Dashboard")').click() // Tag with value

      //cy.get('input#email').type("rashidahmed+51@folio3.com") tag with id

      cy.get('[name="email"]').type("rashidahmed+51@folio3.com")// using attribute with value
      //cy.xpath("//input[@id='email']").type("rashidahmed+51@folio3.com") //using xpath 
      cy.get('#password').type("1234ASdf") // id without tag
     
    
    })
  })
