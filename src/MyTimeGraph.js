import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { parse, differenceInMinutes, startOfDay, endOfDay } from "date-fns";
import { useState, useEffect } from "react";

export default function MyTimeGraph(props) {
  function getValues() {
    const now = new Date();
    const startdata = parse(props.start, "HH:mm", now);
    const enddata = parse(props.end, "HH:mm", now);
    const today_start = startOfDay(now);
    const today_end = endOfDay(now);

    const d1 = differenceInMinutes(now, startdata) / 60.0;
    const d2 = differenceInMinutes(enddata, now) / 60.0;
    const d0 = differenceInMinutes(startdata, today_start) / 60.0;
    const d3 = differenceInMinutes(today_end, enddata) / 60.0;

    return [d0, d1, d2, d3];
  }

  //const graphdata = [9, 1, 8, 6];
  const [graphdata, setGraphdata] = useState(getValues());

  useEffect(() => {
    const timeId = setInterval(() => {
      setGraphdata(getValues());
    }, 5 * 60 * 1000);

    return () => {
      clearTimeout(timeId);
    };
  });

  const options = {
    animation: false,
    plugins: {
      title: {
        display: true,
        text: "終業まで" + Math.round(graphdata[2] * 10) / 10 + "時間",
      },
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 24,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels: [""],
    datasets: [
      {
        data: [graphdata[0]],
        backgroundColor: "rgb(232,250,233)",
      },
      {
        data: [graphdata[1]],
        backgroundColor: "rgb(144,227,109)",
      },
      {
        data: [graphdata[2]],
        backgroundColor: "rgb(250,225,35)",
      },
      {
        data: [graphdata[3]],
        backgroundColor: "rgb(232,250,233)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
