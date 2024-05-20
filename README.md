# Meet App

## Overview

Meet is a serverless, progressive web application (PWA) built with React, leveraging a test-driven development (TDD) approach. The app uses the Google Calendar API to fetch upcoming events and offers a seamless user experience with offline support and data visualizations.

## Project Features & Scenarios

**Feature 1: Filter Events By City**

User story:
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

SCENARIO 1
When user hasn’t searched for a specific city, show upcoming events from all cities.

- Given user hasn’t searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

SCENARIO 2
User should see a list of suggestions when they search for a city.

- Given the main page is open;
- When user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.

SCENARIO 3
User can select a city from the suggested list.

- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

**Feature 2: Show/Hide Event Details**

User story:
As a user,
I should be able to show event details
So that I can view additional information about the event.

User story:
As a user,
I should be able to hide event details
So that I can reduce clutter on my screen.

SCENARIO 1
An event element is collapsed by default.

- Given the user opens the events app;
- Then the event element should be collapsed by default.

SCENARIO 2
User can expand an event to see details.

- Given the user opens the events app;
- When the user selects an event;
- Then the event details should be visible.

SCENARIO 3
User can collapse an event to hide details.

- Given the user has expanded an event to see details;
- When the user collapses the event;
- Then the event details should be hidden.

**Feature 3: Specify Number of Events**

User story:
As a user,
I should be able to specify a number of events displayed
So that I can customize my viewing experience based on my preference.

SCENARIO 1
When user hasn’t specified a number, 32 events are shown by default.

- Given the user opens the events app;
- Then 32 events should be shown by default.

SCENARIO 2
User can change the number of events displayed.

- Given the user opens the events app;
- When the user selects a different number of events to display;
- Then the number of events displayed should match the user's selection.

**Feature 4: Use the App When Offline**

User story:
As a user,
I want the app to function offline
So that I can continue using it even when I don't have an internet connection.

SCENARIO 1
Show cached data when there’s no internet connection.

- Given the user has previously accessed the app and data has been cached;
- When the user opens the app without an internet connection;
- Then the app should display the cached data.

SCENARIO 2
Show error when user changes search settings (city, number of events).

- Given the user has previously accessed the app and data has been cached;
- When the user changes search settings such as city or number of events without an internet connection;
- Then the app should display an error message indicating that an internet connection is required to update search settings.

**Feature 5: Add an App Shortcut to the Home Screen**

User story:
As a user,
I want to be able to add a shortcut to the Meet app on my device's home screen
So that I can quickly access it.

SCENARIO 1
User can install the Meet app as a shortcut on their device home screen.

- Given the user has the Meet app installed on their device;
- When the user accesses the Meet app;
- Then the user should be provided with an option to add a shortcut to the home screen.

**Feature 6: Display Charts Visualizing Event Details**

User story:
As a user,
I want to see charts visualizing event details
So that I can easily understand the distribution of upcoming events.

SCENARIO 1
Show a chart with the number of upcoming events in each city.

- Given the user is viewing the event details;
- When the user navigates to the charts section;
- Then a chart displaying the number of upcoming events in each city should be shown.

## Serverless Functions in the Meet App

In the Meet app, serverless functions are essential for managing authorization to access public calendar events from the Google Calendar API. To display these events in the React app, users must be authorized to fetch the event data. Instead of maintaining a full server, serverless functions efficiently handle this authorization process.

These functions generate and provide access tokens, ensuring secure access to the Google Calendar API. By using AWS Lambda as the cloud service provider, the app benefits from a scalable and cost-effective architecture. This setup simplifies authorization while maintaining security and efficiency.
