
/// <reference types = "cypress-xpath" />


before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });



describe('Select', () => {
    it('Zoho demo', () => {
      // Visit Zoho eceommerce 
      cy.wait(1000)
       cy.visit('https://www.zoho.com/commerce/free-demo.html?src=homepage')
       cy.wait(1000)
       cy.get('.select.zfields-element selling_mode valid').select("Not selling, but I'm interested to")
       cy.wait(200)
    })

})
