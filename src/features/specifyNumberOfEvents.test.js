import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, within, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn`t specified a number, 32 events are shown by default", ({
    given,
    then,
  }) => {
    let AppComponent;
    given("the user opens the events app", () => {
      AppComponent = render(<App />);
    });

    then(/^(\d+) events should be shown by default$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    const numberOfEvents = 3;

    given("the user opens the events app", () => {
      AppComponent = render(<App />);
    });

    when(
      "the user selects a different number of events to display",
      async () => {
        const user = userEvent.setup();
        AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsComponent =
          AppDOM.querySelector("#number-of-events");

        const numberInput = AppDOM.querySelector("#number-of-events-input");
        // console.log(numberInput);
        await user.type(numberInput, "{backspace}{backspace}3");
        expect(numberInput).toHaveValue(numberOfEvents);
      }
    );

    then(
      "the number of events displayed should match the user`s selection",
      () => {
        const EventListDOM = AppDOM.querySelector("#event-list");
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(numberOfEvents);
      }
    );
  });
});
