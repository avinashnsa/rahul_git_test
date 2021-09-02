describe("Test suite", function () {
    it("Handling tables", function () {
      cy.visit("https://chercher.tech/practice/dynamic-table");
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
      //selects the total number of rows
      cy.get("tr");
      //selects the column elements
      cy.get("td"); //[OR] cy.get("tr td");
      //iterating through the array of elements
      cy.get("td:nth-child(2)").each(($e1, index, $list) => {
        // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
        //storing the content in the text variable
        const text = $e1.text();
        //If the content is Google,iteration stops
        if (text.includes("google.com")) {
          //grabs the element at the index
          cy.get("td:nth-child(2)").eq(index);
          //selects the checkbox
          cy.get("input").eq(index).check();
        }
      });
    });
  });