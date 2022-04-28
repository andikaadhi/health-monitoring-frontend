import React, { useEffect, useRef } from 'react';
import ChartJs from 'chart.js/auto';

const createData = (dataLabel, dataPoints, lineColor) => ({
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: dataLabel,
      data: dataPoints,
      borderColor: lineColor,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    },
  ],
});

const createConfig = (title, { dataLabel, dataPoints, lineColor }) => ({
  type: 'line',
  data: createData(dataLabel, dataPoints, lineColor),
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

function Chart({
  title, dataPoints, dataLabel, lineColor, className,
}) {
  const canvasRef = useRef();

  const dataRef = useRef({ dataPoints, dataLabel, lineColor });
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
