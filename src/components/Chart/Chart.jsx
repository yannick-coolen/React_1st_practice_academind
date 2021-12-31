import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
