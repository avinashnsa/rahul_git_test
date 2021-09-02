import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('I visited to site',() =>
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})
When('I click on alert btn',() =>
{
    cy.get('#alertbtn').click()
})
And('I click on confirm btn',() =>
{
    cy.get('#confirmbtn').click()
})
Then('windows:alert text printed',() =>
{
    cy.on('window:alert',(str)=>
    {
        //mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })
})