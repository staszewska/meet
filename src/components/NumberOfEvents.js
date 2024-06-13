import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [value, setValue] = useState(32);

  const handleInputChanged = (event) => {
    const newValue = event.target.value;

    if (!isNaN(newValue) && newValue !== "") {
      setValue(Number(newValue));
      setCurrentNOE(Number(newValue));
    } else {
      // Handle empty input to avoid uncontrolled behavior
      setValue(newValue);
      setCurrentNOE(0);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="number"
        id="number-of-events-input"
        className="number-of-events-input"
        onChange={handleInputChanged}
        value={value}
      />
    </div>
  );
};

export default NumberOfEvents;
