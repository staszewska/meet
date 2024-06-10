import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn`t specified a number, 32 events are shown by default", ({
    given,
    then,
  }) => {
    given("the user opens the events app", () => {});

    then(/^(\d+) events should be shown by default$/, (arg0) => {});
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    given("the user opens the events app", () => {});

    when("the user selects a different number of events to display", () => {});

    then(
      "the number of events displayed should match the user's selection",
      () => {}
    );
  });
});
