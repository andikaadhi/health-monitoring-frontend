import React, { useEffect, useRef } from "react";
import ChartJs from "chart.js/auto";

const createData = (labels, dataLabel, dataPoints, lineColor) => ({
  labels,
  datasets: [
    {
      label: dataLabel,
      data: dataPoints,
      borderColor: lineColor,
      fill: false,
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
  ],
});

const createConfig = (title, { labels, dataLabel, dataPoints, lineColor }) => ({
  type: "line",
  data: createData(labels, dataLabel, dataPoints, lineColor),
  options: {
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
        suggestedMin: 90,
        suggestedMax: 100,
      },
    },
  },
});

function Chart({ title, labels, dataPoints, dataLabel, lineColor, className }) {
  const canvasRef = useRef();

  const dataRef = useRef({ labels, dataPoints, dataLabel, lineColor });
  useEffect(() => {
    new ChartJs(canvasRef.current, createConfig(title, dataRef.current));
  }, [title]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Chart;
