import { Col, Row, Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, cryptoDetails }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        // backgroundColor: "#0071bd",
        // borderColor: "#0071bd",
        // borderColor: "rgb(75, 92, 92)",
        borderColor: "white",
        fill: true,
        tension: 0.9,
        // backgroundColor: "rgb(0, 113, 189, 0.5)",
        // backgroundColor: "wheat",
        // backgroundColor: "rgb(188 146 68)",
        backgroundColor: cryptoDetails.color,
        // pointStyle: "star",
        pointStyle: "circle",
        // pointStyle: "rectRounded",
        pointRadius: 5,
        backdropColor: "red",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      x: {
        // backgroundColor: "wheat",
        backgroundColor: "rgb(204 174 88 / 85%)",
      },
      // y: {
      //   backgroundColor: "wheat",
      // },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgb(255, 99, 132)",
          // This more specific font property overrides the global property
          font: {
            size: 20,
            family: "Chiller",
            weight: "bolder",
            // color: "red",
            // backdropColor: "red",
          },
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title text-wheat">
          {coinName} Price Chart ({cryptoDetails.symbol})
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change text-wheat">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price text-wheat">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line className="text-wheat" data={data} options={options} />
    </>
  );
};

export default LineChart;
