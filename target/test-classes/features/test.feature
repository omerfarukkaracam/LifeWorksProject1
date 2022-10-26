@smoke
Feature: Soucedemo Tests

    Background:
      Given User open soucedemo page
      And User enter credentials


    @test1
    Scenario: User login to soucedemo and land into product page
      Then user verify product page

    @test2
    Scenario Outline: select 3product but buy 2 product
      And User select three products
      And user goes to basket and buy two products
      And user fill checkout information with "<name>","<surname>","<postcode>"
      And User finish the order
      Then verify checkout complete with "THANK YOU FOR YOUR ORDER"
      Examples:
      |name|surname|postcode|
      |Omer|karacam|RG6 3UD |

@test3
Scenario: User buy products $30 to $60
  And user goes to basket and buy products
  And user fill checkout information "omer","Karacam","Rg6 3UD"
  And User finish the order
  Then verify checkout complete with "THANK YOU FOR YOUR ORDER"