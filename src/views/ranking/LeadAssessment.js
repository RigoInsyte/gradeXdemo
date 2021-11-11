import React, { useState, useEffect } from 'react';
import Select from "react-select";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Row,
    Col,
    Label,
    Input,
    FormGroup,
  } from "reactstrap";
  import ReactBSAlert from "react-bootstrap-sweetalert";
  import { FaStar } from "react-icons/fa"
  import "./leadAssessment.css"

export default function CompareGral() {
    const [data1, setData]= useState([]);
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp1Name, setSelectcomp1Name] = useState();
    const [loading, setLoading] = useState(true);

    const [rating, setRating] = useState(null);
    const [rating1, setRating1] = useState(null);
    const [rating3, setRating3] = useState(null);

    const [alert, setAlert] = React.useState(null);

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

    const titleAndTextAlert = () => {
        setAlert(
          <ReactBSAlert
            style={{ display: "block", marginTop: "-100px" }}
            title="Save"
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            confirmBtnBsStyle="success"
            btnSize=""
          >
            It's pretty, isn't it?
          </ReactBSAlert>
        );
      };
      
      const hideAlert = () => {
        setAlert(null);
      };

    return(

        <div className="content">
        
        <Row>
            <Col md="7">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Selected Company</CardTitle>                    
                    <br/>
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
        <Row>
            <Col md="9">      
                <CardTitle>
                    
                </CardTitle>          
                <CardBody>                    
                    <Row>
                        <Col md="3">
                        <h5>Potential Lead Value</h5>
                        This rating is : {rating1}                            
                            <div>    
                                
                                {[ ...Array(5)].map((star, i) => { 
                                    const ratingValue1 = i + 1;
                                return (
                                    <label>
                                    <input type="radio" name="rating1" value={ratingValue1} onClick={() => setRating1(ratingValue1)} />
                                    <FaStar className="star"
                                            color={ratingValue1 <= rating1 ? "#ffc107" : "#e4e5e9"}
                                            size={20}
                                        />
                                    </label>
                                );
                                })}
                            </div>                        
                        </Col>
                        <Col md="3">
                          <h5>Level of work required to transform</h5>
                            This rating is : {rating}                            
                            <div>                                    
                                {[ ...Array(5)].map((star, i) => { 
                                    const ratingValue = i + 1;
                                return (
                                    <label>
                                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                                    <FaStar className="star"
                                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                                            size={20}
                                        />
                                    </label>
                                );
                                })}
                            </div>
                        </Col>
                        <Col md="3">
                        <h5>Time to close</h5>
                        This rating is : {rating3}                            
                            <div>    
                                
                                {[ ...Array(5)].map((star, i) => { 
                                    const ratingValue3 = i + 1;
                                return (
                                    <label>
                                    <input type="radio" name="rating3" value={ratingValue3} onClick={() => setRating3(ratingValue3)} />
                                    <FaStar className="star"
                                            color={ratingValue3 <= rating3 ? "#ffc107" : "#e4e5e9"}
                                            size={20}
                                        />
                                    </label>
                                );
                                })}
                            </div>
                        </Col>

                    </Row>          
                    <br/>
                    <br/>
                    <Row>
                        <Label sm="2">Observation:</Label>
                        <Col sm="7">
                        <FormGroup>
                            <Input placeholder="Observation:" type="text" />
                        </FormGroup>
                        </Col>
                  </Row>   
                  
                </CardBody>
            </Col>
        </Row>
        <Row>
                  <Col md="7">
                  <Card>
                        <CardBody className="text-center">
                        <CardText>Save Assessment</CardText>
                            <Button
                                className="btn-fill"
                                color="info"
                                onClick={titleAndTextAlert}
                            >
                                Save!
                            </Button>
                        </CardBody>
                    </Card>
                    </Col>
                      
         </Row>   
    </div>
    )

};
