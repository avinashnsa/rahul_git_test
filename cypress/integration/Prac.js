/// <reference types="Cypress" />
describe("MyFirstSuite",function()
{
    it("MyFirstTest",function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")

        //cy.get(".product:visible").should("have.length",4)

        cy.get('.products').find('.product').should('have.length',4)

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1,index, $list) => {
            const textveg=$e1.find('h4.product-name').text()
            if(textveg.includes('Cashew'))
            {
                $e1.find("button").click()
            }
        })
        cy.get('.brand.greenlogo').as('mainlogo')
        //cy.get('@mainlogo').should(have.text,'GREENKART')
        cy.get('@mainlogo').then(function(logoname){
          cy.log(logoname.text()).should('have.text','GREENKART')
          const lo=logoname
          cy.log(lo)

        })
        console.log("Hello World")
        
    })
})