import React from "react";
import ChartBar from "./ChartBar";
import "./CSS/Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(c => c.value);
  const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximun}
          lable={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
