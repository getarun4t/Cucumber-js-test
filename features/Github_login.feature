Feature: Creating a Gist
Ability to create a gist in the github website

Scenario: To test the ability of a user to login to github website
    Given User is opening login page
    When User is entering username and password
    And User is clicking login button
    Then User is logged in
