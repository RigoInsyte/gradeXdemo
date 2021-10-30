import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const chartExample8 = {
    data: {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: "#ff8a76",
          hoverBackgroundColor: " #ff8a76",
          borderColor: "#ff8a76",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [80, 100, 70, 80, 120, 80, 130],
        },
        {
          label: "Data",
          fill: true,
          backgroundColor: "#2782f0",
          hoverBackgroundColor: " #2782f0",
          borderColor: "#2782f0",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [60, 110, 90, 70, 90, 100],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };

const Charts = () => {
    return (
        <>   
            <div className="content">
            <Col className="ml-auto" md="10">
                <Card className="card-chart">
                <CardHeader>
                    <h5 className="card-category">Simple With Gradient</h5>
                    <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    10,000
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <div className="chart-area">
                    <h4>GRAFICO DE BARRAS</h4>
                    <Bar
                    data={chartExample8.data}
                    options={chartExample8.options}
                    />
                    </div>
                </CardBody>
                </Card>
            </Col>
            </div>
        </> 
    );
};
    
export default Charts;