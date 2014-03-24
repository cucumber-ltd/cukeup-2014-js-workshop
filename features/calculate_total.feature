Feature: Calculate total

  Scenario: Buy one thing
    Given a Cucumber costs $2
    When I buy 3 Cucumbers
    Then the total should be $6
