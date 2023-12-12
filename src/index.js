import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyTime from "./MyTime";
import { Rnd } from "react-rnd";
import MyTimeGraph from "./MyTimeGraph";
import MyNotepad from "./MyNotepad";
import MyCalendar from "./MyCalendar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 320,
        height: 200,
      }}
    >
      <MyTime area="トーキョー" zone="Asia/Tokyo" />
    </Rnd>
    <Rnd
      default={{
        x: 400,
        y: 50,
        width: 320,
        height: 200,
      }}
    >
      <MyTime area="ニューヨーク" zone="America/New_York" />
    </Rnd>
    <Rnd
      default={{
        x: 100,
        y: 300,
        width: 520,
        height: 400,
      }}
    >
      <MyTimeGraph start="9:00" end="18:00" />
    </Rnd>
    <Rnd
      default={{
        x: 100,
        y: 600,
        width: 550,
        height: 200,
      }}
    >
      <MyNotepad />
    </Rnd>
    <Rnd
      default={{
        x: 800,
        y: 250,
        width: 550,
        height: 200,
      }}
    >
      <MyCalendar />
    </Rnd>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
