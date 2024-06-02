import { render, act } from "@testing-library/react"; // Import act from @testing-library/react
import mockData from "../mock-data";
import Event from "../components/Event";
// import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
    act(() => {
      // use act to render a component
      // Use act to render the component
      EventComponent = render(<Event event={event} />);
    });
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
    const button = EventComponent.queryByText("Show Details");
    await act(async () => {
      // Use act for user interaction
      await userEvent.click(button);
    });
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hide details section, when user clicks hide details button", async () => {
    const showButton = EventComponent.queryByText("Show Details");
    const hideButton = EventComponent.queryByText("Hide Details");
    await act(async () => {
      // Use act for user interaction
      await userEvent.click(hideButton);
    });
    expect(showButton).toBeInTheDocument();
    expect(hideButton).not.toBeInTheDocument();
  });
});
