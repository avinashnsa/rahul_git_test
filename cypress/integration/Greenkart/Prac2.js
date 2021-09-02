/// <reference types='Cypress' />
describe('My second suite',function()
{
    it("my first test",function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("[type='search']").type("ca")
        cy.wait(3000)
        //cy.get('.products').find(".product").should('have.length',4)
        cy.get('.products').find('.product').each(($e1, index, $list) =>
        {
            const textveg=$e1.find('h4.product-name').text()
            if(textveg.includes('Cashew'))
            {
                $e1.find('button').click()
            }
        })
        cy.get('[alt="Cart"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    
    })

})