import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Daniele - Kitchen",
    start: new Date(2025, 0, 22, 10, 0),
    end: new Date(2025, 0, 22, 12, 0),
  },
  {
    title: "Matteo - Bathroom",
    start: new Date(2025, 0, 23, 10, 0),
    end: new Date(2025, 0, 23, 11, 0),
  },
];

const CleaningCalendar = () => (
  <div style={{ height: "500px" }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: "50px" }}
    />
  </div>
);

export default CleaningCalendar;