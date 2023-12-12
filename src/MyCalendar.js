import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function MyCalendar() {
  console.log("API Key:", process.env.REACT_APP_GOOGLE_CALENDAR_API);
  console.log("Calendar ID:", process.env.REACT_APP_GOOGLE_CALENDAR_ID);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_API}
      events={{
        googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID,
      }}
    />
  );
}
