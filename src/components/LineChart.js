import React from "react";
import Chart from "chart.js";
import { colors } from "src/theme/config";

const labels = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUsersCount: 48,
      filterChartBy: "6 Mon",
      labels: ["jan", "feb", "march"],
      teamPerformanceChart: "",
      completedData: [57, 5, 89],
      ongoingData: [77, 8, 44],
      pendingData: [3, 53, 9]
    };
  }

  componentDidMount() {
    this.displayChart();
  }

  displayChart = () => {
    const node = this.chart1;
    const config = {
      type: "line",
      data: {
        labels: labels.map((e) => `${e}月`),
        datasets: [
          {
            backgroundColor: colors.secondary300,
            borderColor: colors.secondary300,
            fill: false,
            tension: 0.1,
            data: [60, 70, 80, 90, 100, 22, 120, 13, 23, 32, 43, 53]
          },
          {
            backgroundColor: colors.primary300,
            borderColor: colors.primary300,
            fill: false,
            tension: 0,
            data: [163, 173, 182, 192, 14, 113, 142, 224, 223, 233, 423, 523]
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Index Returns"
              },
              ticks: {
                min: 0,
                max: 500,
                stepSize: 100
              }
            }
          ]
        }
      }
    };
    let teamPerformanceChart = new Chart(node, config);
    this.setState({ teamPerformanceChart });
  };

  handleChange = (e) => {
    this.setState({ filterChartBy: e.target.value });
  };

  render() {
    return (
      <canvas
        style={{ width: 800, height: 300 }}
        ref={(node) => (this.chart1 = node)}
      />
    );
  }
}

export default LineChart;
