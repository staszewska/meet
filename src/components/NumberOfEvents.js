import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [value, setValue] = useState(32);

  const handleInputChanged = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    let errorAlert;
    if (isNaN(newValue) || newValue <= 0) {
      errorAlert = "Only positive numbers are allowed";
    } else {
      // Handle empty input to avoid uncontrolled behavior
      errorAlert = "";
      setValue(newValue);
      setCurrentNOE(newValue);
    }

    setErrorAlert(errorAlert);
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
