import React,  { useState, useEffect } from 'react'
import { Row, Col, CardHeader,Card, CardTitle, CardBody,  
    CardFooter,
    CardText,
    Button,
   } from 'reactstrap'
import Select from "react-select";
import ReactApexChart from 'react-apexcharts'


export default function FeedAlerts() {
    const [data1, setData]= useState([]);
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp1Name, setSelectcomp1Name] = useState();
    const [loading, setLoading] = useState(true);

    const [singleSelect, setsingleSelect] = React.useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
        //let resp = await fetch(`http://168.181.186.118:9093/democompany/allcomp`);
        let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies`);
			  resp = await resp.json();
        setData(resp.companies);        
        setSelectcomp1(resp.companies[0].id);
        console.log(resp.companies)
			  } catch(error) {
				  console.error(error);
			  }
		};
		getData().then(() => setLoading(false));
	}, []);

    const [estado, setEstado] = useState(
        {
          
            series: [{
              name: 'TEAM A',
              type: 'column',
              data: [23, 11, 22, 27, 13, 22, 37, 21]
            }, {
              name: 'TEAM B',
              type: 'area',
              data: [44, 55, 41, 67, 22, 43, 21, 41]
            }, {
              name: 'TEAM C',
              type: 'line',
              data: [30, 25, 36, 30, 45, 35, 64, 52]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                stacked: false,
              },
              stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%'
                }
              },
              
              fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                  inverseColors: false,
                  shade: 'light',
                  type: "vertical",
                  opacityFrom: 0.85,
                  opacityTo: 0.55,
                  stops: [0, 100, 100, 100]
                }
              },
              labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003'
              ],
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                title: {
                  text: 'Points',
                },
                min: 0
              },
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if (typeof y !== "undefined") {
                      return y.toFixed(0) + " points";
                    }
                    return y;
              
                  }
                }
              }
            },
        }
    );

    return (
        <div className="content">
            FEED ALERTS
            <Row>
                <Col md="4">                
                    <Card>
                        <CardHeader>
                            
                            <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={singleSelect}
                            onChange={(value) => setsingleSelect(value)}
                            options={[
                                {
                                value: "",
                                label: "All Alerts",
                                isDisabled: true,
                                },
                                { value: "2", label: "Aws Access Failure" },
                                { value: "3", label: "Apic Bad Credentials" },
                            ]}
                            placeholder="Single Select"
                            />
                            <br/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardHeader>
                            <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            name="selectcomp1"
                            value={selectcomp1}
                            onChange={e => {setSelectcomp1(e.value);setSelectcomp1Name(e.label)}}
                            options= {data1.map(e=>({label: e.name, value: e.id}))}
                            placeholder = {selectcomp1Name == "" ? "Single Select" : selectcomp1Name}
                            />
                            <br/>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
                <Col md="8">
                    <Card>
                        <CardHeader>

                        </CardHeader>
                        <CardBody>
                            <div>                                
                                <blockquote>
                                    <p className="blockquote blockquote-primary">
                                        <Row>
                                            <Col md="6">
                                            <Card className="card-user">
                                                <CardBody>
                                                    <CardText />
                                                    <div className="author">
                                                    <div className="block block-one" />
                                                    <div className="block block-two" />
                                                    <div className="block block-three" />
                                                    <div className="block block-four" />
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img src="https://www.eurazeo.com/themes/custom/eurazeo/images/logo-eurazeo-white.svg" alt = "Logo"/>
                                                        <br/>
                                                        <br/>
                                                        <h5 className="title">{selectcomp1Name}</h5>
                                                    </a>
                                                    <p className="description">{selectcomp1Name} : La tendance baisséere peut reprende</p>
                                                    </div>
                                                </CardBody>
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
                                            <Col md="6">
                                            <ReactApexChart options={estado.options} series={estado.series} type="line" height={350} />
                                            </Col>
                                        </Row>                                               
                                            <div className="card-description">
                                                Do not be scared of the truth because we need to restart the
                                                human foundation in truth And I love you like Kanye loves
                                                Kanye I love Rick Owens’ bed design but the back is...
                                            </div>

                                        <Row>

                                        </Row>
                                    </p>
                                </blockquote>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            <Row>

            </Row>
        </div>
    )
}
