import { format } from "date-fns";
import "./MyTime.css";
import { useState, useEffect } from "react";
import { utcToZonedTime } from "date-fns-tz";

export default function MyTime(props) {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const timerid = setInterval(() => {
      setNow(getTime());
    }, 1000);

    return () => {
      clearTimeout(timerid);
    };
  }, []);

  function getTime() {
    //const now = new Date();
    const now = utcToZonedTime(new Date(), props.zone);
    return format(now, "HH:mm:ss");
  }

  return (
    <>
      <div className="area">{props.area}</div>
      <div className="time">{now}</div>
    </>
  );
}
