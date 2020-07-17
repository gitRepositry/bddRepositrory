 Feature: Test Environment
 
 @registerTest
 Scenario: Register Account for new User
   Given User is on TEST Environment page
    When User click on MyAccount
    And User click on Register
    And User fills Register form with bellow information
    |firstName|LastName|E-mail|Telephone|Password|
    |Mike5|Tyoson5|miketoyson5@test.com|1012020002|Toyosn5|
    And User select 'yes' for Subscribe
    And User click privacy and policy button
    And User click Continue button
    Then User should see the message of 'Your Account Has Been Created!'
    
    
 