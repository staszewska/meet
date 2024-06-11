import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, then }) => {
    let AppComponent;
    given("the user opens the events app", () => {
      AppComponent = render(<App />);
    });

    then("the event element should be collapsed by default", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const HideDetailsButtons =
          within(EventListDOM).queryAllByText("Hide Details");
        expect(HideDetailsButtons.length).toBe(0);
      });

      const details = AppDOM.querySelector(".details");
      // console.log(details);
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;

    given("the user opens the events app", async () => {
      AppComponent = render(<App />);
    });

    when("the user clicks on an event element", async () => {
      AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        // console.log("eventList:", eventList);
      });

      const EventToggleButtons = AppComponent.queryAllByText("Show Details");
      // console.log("buttons:", EventToggleButtons);
      const Button = EventToggleButtons[0];
      // console.log("button to click:", Button);
      await userEvent.click(Button);
    });

    then(
      "the event element should expand to show the event details",
      async () => {
        const details = AppDOM.querySelector(".details");
        // console.log(details);
        expect(details).toBeInTheDocument();
      }
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;

    given(
      "the user has expanded an event element to see its details",
      async () => {
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          // console.log("eventList:", eventList);
        });

        const EventToggleButtons = AppComponent.queryAllByText("Show Details");
        // console.log("buttons:", EventToggleButtons);
        const Button = EventToggleButtons[0];
        // console.log("button to click:", Button);
        await userEvent.click(Button);

        const details = AppDOM.querySelector(".details");
        // console.log(details);
        expect(details).toBeInTheDocument();
      }
    );

    when("the user clicks on the expanded event element", async () => {
      const EventCollapseButton = AppComponent.queryByText("Hide Details");
      // console.log("buttons:", EventCollapseButton);
      await userEvent.click(EventCollapseButton);
    });

    then("the event element should collapse to hide the event details", () => {
      const details = AppDOM.querySelector(".details");
      // console.log(details);
      expect(details).not.toBeInTheDocument();
    });
  });
});
