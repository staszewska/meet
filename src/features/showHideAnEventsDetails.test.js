import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
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
      console.log(details);
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("the user opens the events app", () => {});

    when("the user clicks on an event element", () => {});

    then("the event element should expand to show the event details", () => {});
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has expanded an event element to see its details",
      () => {}
    );

    when("the user clicks on the expanded event element", () => {});

    then(
      "the event element should collapse to hide the event details",
      () => {}
    );
  });
});
