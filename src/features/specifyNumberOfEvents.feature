Feature: Specify Number of Events

  Scenario: When user hasn`t specified a number, 32 events are shown by default
    Given the user opens the events app
    Then 32 events should be shown by default

  Scenario: User can change the number of events displayed
    Given the user opens the events app
    When the user selects a different number of events to display
    Then the number of events displayed should match the user`s selection
