/// <reference types="Cypress"/>
import HomePage from '../support/pageObject/HomePage'
import productPage from '../support/pageObject/productPage'

describe('My second Test Suite',function(){
    before(function(){
        //runs before all tests
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
    })
    it('my first test',function(){
        const homepage=new HomePage()
        const productpage=new productPage()
        cy.visit(Cypress.env('url'))
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should('have.value',this.data.name)
        homepage.getEditBox().should('have.attr','minlength','2')
        homepage.getEnterpreneaur().should('be.disabled')
        homepage.getShopTab().click()
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        });
        productpage.getcheckout().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').as('check')
        cy.get('@check').should('have.length','3')
        cy.get('@check').each(($el,index,$list)=>{
            const actualprice=$el.text()
            var res=actualprice.split(" ")
            res=res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount=element.text()
            var total=amount.split(" ")
            total=total[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        productpage.getcheckoutbtn().click()
        productpage.getcountrybox().type(this.data.country)
        cy.wait(5000)
        productpage.getindia().click()
        productpage.getcheckbox().check({force: true})
        productpage.getpurchasebtn().click()
        //productpage.getSuccesstxt().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        productpage.getSuccesstxt().then(function(element)
        {
            const actualtext=element.text()
            expect(actualtext.includes("Success")).to.be.true
        })

        

    })
})