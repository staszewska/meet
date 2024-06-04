import { useState, useEffect } from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents } from "./api";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CitySearch />
      <EventList events={events} />
      <NumberOfEvents />
    </div>
  );
};

export default App;
