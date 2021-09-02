class productPage
{
    getcheckout()
    {
       return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getcheckoutbtn()
    {
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }
    getcountrybox()
    {
       return cy.get('#country')
    }
    getindia()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getcheckbox()
    {
        return cy.get('#checkbox2')
    }
    getpurchasebtn()
    {
        return cy.get('.ng-untouched > .btn')
    }
    getSuccesstxt()
    {
        return cy.get('.alert')
    }

}
export default productPage