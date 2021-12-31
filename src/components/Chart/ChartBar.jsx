import React from 'react';

import './ChartBar.css';

export default function ChartBar({ value, maxValue, label }) {
  let barFilledHeight = '0%';

  if (maxValue > 0) {
    barFilledHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
}
