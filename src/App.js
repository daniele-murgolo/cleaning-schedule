import React from "react";
import CleaningCalendar from "./CleaningCalendar";
import RoommateManagement from "./RoommateManagement";
import CleaningTaskManagement from "./CleaningTaskManagement";

function App() {
  return (
    <div className="App">
      <h1>Cleaning Schedule</h1>
      <CleaningCalendar />
      <RoommateManagement />
      < CleaningTaskManagement />
    </div>
  );
}

export default App;
