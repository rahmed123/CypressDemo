describe('Radio_Checkboxes2', () => {
    
    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      });
    
    it('Visit Orange HRM2', () => {
      // Visit Orange HRM
       cy.visit('https://www.techlistic.com/p/selenium-practice-form.html')
       cy.wait(7000)
       cy.get('[value="Female"]').check()
    })

})