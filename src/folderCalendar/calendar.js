import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { MOCK_EVENTS } from "./myEventsList";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Title } from "chart.js";
import { color } from "highcharts";

const localizer = momentLocalizer(moment);

export default function myComponent() {
  let events = MOCK_EVENTS.map((event) => {
    // new date (Y,M,D,H,MIN)
    return {
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color
    };
  });
  return (
    <>
      <h2 className="text-blue-500">calendar</h2>
      <div className="App">
        <Calendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    </>
  );
}
