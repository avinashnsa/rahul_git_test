/// <reference types='Cypress'/>
describe('MyFirst',function()
{
    it('Myfirst',function()
    {
        cy.visit('https://www.demoqa.com/')
        cy.get('.card.mt-4.top-card').eq(1).click()
        cy.get('.col-12.mt-4.col-md-6').then(function(logo1){
            cy.log(logo1.text())
        })
    })
})