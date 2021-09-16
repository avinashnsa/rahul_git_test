/// <reference types='Cypress'/>
describe('My First suite',function(){
    it('My first alerts',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str)=>
        {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })
        cy.wait(2000)

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(2000)
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    })
})
