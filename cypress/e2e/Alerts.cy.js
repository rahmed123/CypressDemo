/// <reference types = "cypress-xpath" />
describe('Alerts', () => {
    
    it('JS Alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:alert',(t)=>{

        expect(t).to.contains('I am a JS Alert')
        })

    })

        it('JS Confirmation', () => {


            // Cypress automatically close the alert by clicking the OK button 
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('button[onclick="jsConfirm()"]').click()
            //cy.on('window:confirm',(t)=>{
            //expect(t).to.contains('I am a JS Alert')
            cy.on('window:confirm',()=> false ) // Cypress window closes the JS alert
            cy.get('#result').should('have.text','You clicked: Cancel')
            cy.wait(1000)
        })


        it.only('JS Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

        })
        cy.get('button[onclick="jsPrompt()"]').click()

        //cypress automatically close the alert 

        cy.get('#result').should('have.text','You entered: welcome')


    })


    })