Feature:End to end Ecommerce validation

    application Regression
    Scenario: Ecommerce products delivery
    Given I opened Ecommerce page
    When I add items to cart
    And Validate the toltal prices
    Then Select the country submit verify Success

    @Regression
    Scenario: Filling the form to shop
    Given I opened Ecommerce page
    When I filled the form details
    |name | gender|
    |bob  | Male  |
    Then validate the form behaviour
    And select the shop page