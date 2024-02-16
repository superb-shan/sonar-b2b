import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function DoughnutChart({ data, totalName }) {
  const calculateTotal = () => {
    return data.reduce((acc, item) => acc + item.value, 0);
  };

  const totalValue = calculateTotal();

  const getColor = (value) => {
    const minValue = Math.min(...data.map((item) => item.value));
    const maxValue = Math.max(...data.map((item) => item.value));

    const gradient = 1 - (value - minValue) / (maxValue - minValue);
    const startColor = "#2e8cef"; // Darkest gradient color
    const endColor = "#92c7fd"; // Lightest gradient color

    const r = Math.floor(
      parseInt(startColor.slice(1, 3), 16) +
        gradient *
          (parseInt(endColor.slice(1, 3), 16) - parseInt(startColor.slice(1, 3), 16))
    );
    const g = Math.floor(
      parseInt(startColor.slice(3, 5), 16) +
        gradient *
          (parseInt(endColor.slice(3, 5), 16) - parseInt(startColor.slice(3, 5), 16))
    );
    const b = Math.floor(
      parseInt(startColor.slice(5, 7), 16) +
        gradient *
          (parseInt(endColor.slice(5, 7), 16) - parseInt(startColor.slice(5, 7), 16))
    );

    return `rgb(${r},${g},${b})`;
  };

  // Sort data in descending order based on value
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // Set the title conditionally
  const chartTitle =
    sortedData.length === 0 ? 
        `<div style="text-align: center; font-family: 'Poppins';">
            <div style="font-size: 12px; font-weight: 500; margin-bottom: 20px;">No Records </div>
        </div>`
      :
    totalName.length >= 15 ?
        `<div style="font-family: 'Poppins';">
            <div style="font-size: 12px; font-weight: 500; margin-bottom: 20px;">${totalName}</div>
            <br/>
            <div style="font-size: 14px; font-weight: bold;">&#8377; ${totalValue.toLocaleString("en-In")}</div>
        </div>`
        :
        `<div style="font-family: 'Poppins';">
            <p style="font-size: 12px; font-weight: 500; margin-bottom: 20px;">${totalName}</p>
            <p style="font-size: 14px; font-weight: bold;">&#8377; ${totalValue.toLocaleString("en-In")}</p>
        </div>`
        ;

  const [options, setOptions] = useState({
    chart: {
      type: "pie",
      backgroundColor: "transparent", // Background color of the doughnut chart
      height: "220px",
    },
    title: {
      text: chartTitle,
      x: 80,
      width: 160,
      verticalAlign: "middle",
      align: "center",
      floating: true,
    },
    exporting: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        borderRadius: 4, // Adjust the radius value as needed
      },
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      borderRadius: 10,
      style: {
        color: "#000000",
        fontFamily: "Poppins",
      },
      formatter() {
        return `<span style="color:#6E6E72; font-weight: 500; font-size: 12px">${this.key} <span style="color: black; font-weight: bold">${this.y.toLocaleString("en-In")}</span> </span>`;
      },
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        data: sortedData.map((item) => ({
          name: item.name,
          y: item.value,
          color: getColor(item.value),
          showInLegend: false,
        })),
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            minWidth: 624,
          },
          chartOptions: {
            tooltip: {
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              borderRadius: 20,
              style: {
                color: "#000000",
                fontSize: "14px",
              },
              formatter() {
                return `<span style="color:#6E6E72; font-weight: medium"> </span>`;
              },
              labels: {
                enabled: false,
              },
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    setOptions((previousOptions) => ({
      ...previousOptions,
      title: {
        text: chartTitle,
        verticalAlign: "middle",
        y: 15,
        floating: true,
      },
      series: [
        {
          data: sortedData.map((item) => ({
            name: item.name,
            y: item.value,
            color: getColor(item.value),
            showInLegend: false,
          })),
        },
      ],
    }));
  }, [data]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default DoughnutChart;
