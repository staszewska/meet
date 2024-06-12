import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250, // slow down by 250ms,
      timeout: 0,
    });
    // browser = await puppeteer.launch();

    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  // afterAll(() => {
  //   browser.close();
  // });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(" .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .showDetailsButton");
    const eventDetails = await page.$(".details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .showDetailsButton");
    const eventDetails = await page.$(" .details");
    expect(eventDetails).toBeNull();
  });
});

describe("Filter events by city", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250,
      timeout: 0,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
    const upcomingEvents = await page.$$(".event");
    expect(upcomingEvents.length).toBeGreaterThan(0);
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.click(".city"); // focus on inout
    await page.type(".city", "Ber");
    await page.waitForSelector(".suggestions"); // wait for the suggestion list to appear
    const suggestions = await page.$$(".suggestions li"); // get all suggestion elements
    expect(suggestions.length).toBeGreaterThan(0); // assert that there are suggestions displayed
  });

  test("User can select a city from the suggested list", async () => {
    const cityInputElement = await page.$(".city");

    // Clean up the input field
    await cityInputElement.click({ clickCount: 3 });
    await cityInputElement.press("Backspace");

    await page.click(".city"); //focus on input
    await page.type(".city", "Berlin");
    await page.waitForSelector(".suggestions");
    await page.click(".suggestions li");

    const selectedCity = await page.$eval(".city", (input) => input.value); // get the value of the city input
    // console.log("selectedCity:", selectedCity);
    expect(selectedCity).toBe("Berlin, Germany"); // assert that the city input value has changed to the selected city
    await page.waitForSelector(".event"); // wait for events to load
    const upcomingEvents = await page.$$(".event"); // get all event elements
    expect(upcomingEvents.length).toBeGreaterThan(0); // assert that there are upcoming events displayed
  });
});
