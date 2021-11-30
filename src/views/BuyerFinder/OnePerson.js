import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  CustomInput,
  ListGroupItem,
  ListGroup,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

const OnePerson = () => {

    const chartExample9 = {
        data: {
          labels: [1, 2],
          datasets: [
            {
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#00c09d", "#e2e2e2"],
              borderWidth: 0,
              data: [60, 40],
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

  return (
      <div className="content">
        <Row>
           <Col md="5">
            <Card className="card-testimonial">
              <CardHeader className="card-header-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/img/tania.jpg").default}
                  />
                </a>
              </CardHeader>
              <CardBody>
              <CardTitle tag="h4">Andrew Mike.</CardTitle>
                <p className="card-description">
                    Global Chief Information
                    Digital Banking | Fintech
                </p>
                <div className="icon icon-primary">
                  <i className="fa fa-quote-right" />
                </div>
              </CardBody>
              <CardFooter>
                
                <p className="category">robert----@icbc.com</p>
                <p className="category">Phone :  +54 9 -------</p>
              </CardFooter>
            </Card>
            <Card>
                <CardFooter>
                    <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                        <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                        <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                        <i className="fab fa-google-plus" />
                    </Button>
                    </div>
                </CardFooter>
                </Card>
        </Col> 
        <Col md="5">
              <Row>
                
                    <Card className="card-chart card-chart-pie">
                    <CardHeader>
                        <h5 className="card-category">Simple Pie Chart</h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                        <Col xs="6">
                            <div className="chart-area">
                            <Pie
                                data={chartExample9.data}
                                options={chartExample9.options}
                            />
                            </div>
                        </Col>
                        <Col xs="6">
                            <CardTitle tag="h4">
                            <i className="tim-icons icon-trophy text-success" />{" "}
                            10.000$
                            </CardTitle>
                            <p className="category">A total of $54000</p>
                        </Col>
                        </Row>
                    </CardBody>
                    </Card>
                

              </Row>
              <Row>

              </Row>
              <Row>
              
              <img
                          alt="..."
                          src={require("assets/img/icbclogo.png").default}
                          width= "60px"
                          height = "40px"
                        />
                        <br/>
                        <h4>Industrial and Commercial Bank of China</h4>
                        China - Banking<br/>
                        + 10000 employees 
              </Row>
              <Link to={"/peopletable"}>Back to home</Link>
              <Link to={"/admin/lpersons"}>grid to </Link>
        </Col>      
        </Row>
        
        </div>   
  );
};

export default OnePerson;