import { render } from "@testing-library/react"; // No need to import act explicitly
import mockData from "../mock-data";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];

  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test("has event title", () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test("has event created time", () => {
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test("has event location", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test("has button show details", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default, events details section should be hidden", () => {
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("shows details section, when user clicks show details button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("Show Details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hide details section, when user clicks hide details button", async () => {
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText("Show Details");
    await user.click(showButton); // First click to show details
    const hideButton = EventComponent.queryByText("Hide Details");
    await user.click(hideButton); // Second click to hide details
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
    expect(EventComponent.queryByText("Hide Details")).not.toBeInTheDocument();
  });
});
