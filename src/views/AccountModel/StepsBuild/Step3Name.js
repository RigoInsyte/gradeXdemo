import React, { useState, useEffect } from 'react';
import {Row, CardBody, Col, Card, 
    CardHeader,
    Label,
    FormGroup,
    Input,
    Progress,
    CardTitle,
    Table,
        } from "reactstrap";    
import {  Pie } from "react-chartjs-2";
import Select from "react-select";

const Step3Name = React.forwardRef((props, ref) => {

const [level, setLevel]= useState();
const [datamodel, dataModel] = useState([]);
const [datapie, setDatapie] = useState([]);

const chartExample10 = {
    data: {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#ff8779", "#2a84e9", "#e2e2e2","#C271B4"],
          borderWidth: 0,
          data: datapie,
        },
      ],
    },
    options: {
      cutoutPercentage: 70,
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
      scales: {
        yAxes: [
          {
            display: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: "rgba(255,255,255,0.05)",
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  };

//const ExaData = () => {
const ejJason = 
    [
        {
            "id" : 1,
            "level" : 78,
            "grid100": [
                {
                    "rowItem" :1,
                    "rowCaption" : "Number of founding rounds", 
                    "rowPercent" : 45,
                },
                {
                    "rowItem" :2,
                    "rowCaption" : "Monthly visits", 
                    "rowPercent" : 32,
                },
                {
                  "rowItem" :3,
                  "rowCaption" : "Total Found Amount", 
                  "rowPercent" : 16,
              }
            ]
        }
    ];

//}

    useEffect(() => {
        const getData = async () => {
        try {
            //let resp = await fetch(ejJason);
            //let resp = await fetch(`http://168.181.186.118:9093/democompany/talentover?idcom=${empresaSelected}`);
            //resp = await resp.json();
            console.log(ejJason);
            setLevel(ejJason[0].level);
            dataModel(ejJason[0].grid100);
            console.log(ejJason[0].level);
            console.log(ejJason[0].grid100);
            var datosper=ejJason[0].grid100;
            var auxpie=[];
            datosper.map(elemento => {
                auxpie.push(elemento.rowPercent)                
            });
            setDatapie(auxpie);
            console.log(datapie)
        } catch(error) {
            console.error(error);
        }
        };
        getData();
    }, []);

    const [step3Select, setstep3Select] = React.useState(null);
    React.useImperativeHandle(ref, () => ({
      isValidated: undefined,
    }));

    return (
        <>
          <div className="content">
              <Row>
                <Col>
                
                <h3>Account Model Formula</h3>
                </Col>
              </Row>  
              <Row>
                
                <Col >
                    <Card className="card-pricing card-primary">
                        <CardBody>
                            <div className="card-prices">
                            <h3 className="text-on-front">
                                <span></span>
                                95 %
                            </h3>
                            <h5 className="text-on-back">95</h5>
                            <p className="plan">Level</p>
                            </div>                        
                        </CardBody>
                    </Card>
                </Col >
              </Row>
              <Row>
                <Col md="8">
                    <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Percent level</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table>
                        <thead className="text-primary">
                            <tr>
                            <th className="text-center">#</th>
                            <th>Order</th>
                            <th>Criteria</th>
                            <th>Value</th>
                            <th className="text-center">Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                           {datamodel.map((d) =>{
                              return (
                                <tr>
                                <td className="text-center">
                                    <FormGroup check>
                                    <Label check>
                                        <Input defaultChecked type="checkbox" />
                                        <span className="form-check-sign" />
                                    </Label>
                                    </FormGroup>
                                </td>
                              <td>{d.rowItem}</td>
                              <td>{d.rowCaption}</td>                              
                                <td>
                                    <div className="progress-container">
                                    <span className="progress-badge">percent</span>
                                    <Progress max="100" value={d.rowPercent}>
                                        <span className="progress-value">{d.rowPercent}%</span>
                                    </Progress>
                                    </div>
                                </td>
                                <td className="text-center">{d.rowPercent}%</td>
                                </tr>
                               
                            )
                           } )} 
                                <tr>
                                <td colSpan="3" />
                                <td className="td-total">Total</td>
                                <td className="td-price">100 %</td>
                                </tr>
                        </tbody>
                        </Table>
                    </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                    <CardHeader>
                    <h5 className="card-category">Chart Percent level</h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs="10">
                            <div className="chart-area">
                            <Pie
                                data={chartExample10.data}
                                options={chartExample10.options}
                            />
                            </div>
                        </Col>
                        <br/>
                        <br/>
                        <br/>
                        </Row>
                        <Row>
                        <Col xs="8">
                            <CardTitle tag="h4">
                            <i className="tim-icons icon-tag text-warning" /> 100 %
                            </CardTitle>
                            <p className="category">Reliability Level</p>
                        </Col>
                        </Row>
                    </CardBody>                    
                    </Card>
                
                </Col>

              </Row>
              <Row>
                <h5>boton get</h5>
              </Row>
          </div>
        </>
        );
});

export default Step3Name;