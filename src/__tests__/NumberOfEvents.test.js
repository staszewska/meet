import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("renders number of events text input", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-of-events-input");
  });

  test("default value of the input field is 32", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberTextBox).toHaveValue(32);
  });

  test("value changes accordingly when user types", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    await user.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue(10);
  });
});
