import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../support/pageObject/HomePage.js'
import productPage from '../../../support/pageObject/productPage'

const homepage=new HomePage()
const productpage=new productPage()
let name

Given('I opened Ecommerce page',function ()
{
    cy.visit(Cypress.env('url'))
})

When('I add items to cart',function()
{
    homepage.getShopTab().click()
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        });
        productpage.getcheckout().click()
})

And('Validate the toltal prices',function()
{
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
})

Then('Select the country submit verify Success',function()
{
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


    When('I filled the form details',function(dataTable)
{
    name=dataTable.rawTable[1][0]
    homepage.getEditBox().type(dataTable.rawTable[1][0])
    homepage.getGender().select(dataTable.rawTable[1][1])  
})

Then('validate the form behaviour',function(dataTable)
{
    homepage.getTwoWayDataBinding().should('have.value',name)
    homepage.getEditBox().should('have.attr','minlength','2')
    homepage.getEnterpreneaur().should('be.disabled')
})

And('select the shop page',function()
{
    homepage.getShopTab().click()
})
