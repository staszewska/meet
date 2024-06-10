Feature: Show/Hide Event Details

  User story: As a user, I should be able to show event details So that I can view additional information about the event.

  User story: As a user, I should be able to hide event details So that I can reduce clutter on my screen.

  Scenario: An event element is collapsed by default
    Given the user opens the events app
    Then the event element should be collapsed by default

  Scenario: User can expand an event to see its details
    Given the user opens the events app
    When the user clicks on an event element
    Then the event element should expand to show the event details

  Scenario: User can collapse an event to hide its details
    Given the user has expanded an event element to see its details
    When the user clicks on the expanded event element
    Then the event element should collapse to hide the event details
