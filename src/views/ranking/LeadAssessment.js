import React, { useState, useEffect } from 'react';
import Select from "react-select";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    Form,
    Label,
    Input,
    FormGroup,
  } from "reactstrap";

export default function CompareGral() {
    const [data1, setData]= useState([]);
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp1Name, setSelectcomp1Name] = useState();
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
        let resp = await fetch(`http://168.181.186.118:9093/democompany/allcomp`);
			  resp = await resp.json();
        setData(resp.return);        
        setSelectcomp1(resp.return[0].COMPANY_ID);
			  } catch(error) {
				  console.error(error);
			  }
		};
		getData().then(() => setLoading(false));
	}, []);



    return(
        <div className="content">
        LEED ASSESSMENT
        <Row>
            <Col md="4">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Selected Company</CardTitle>
                    {selectcomp1}
                    <br/>
                    <Select
                        className="react-select info"
                        classNamePrefix="react-select"
                        name="selectcomp1"
                        value={selectcomp1}
                        onChange={e => {setSelectcomp1(e.value);setSelectcomp1Name(e.label)}}
                        options= {data1.map(e=>({label: e.COMPANY_NAME, value: e.COMPANY_ID}))}
                        placeholder = {selectcomp1Name == "" ? "Single Select" : selectcomp1Name}
                    />
                    <br/>
                  </CardHeader>
                </Card>
            </Col>    
        </Row> 
        <Row>
            <Col md="10">      
                <CardTitle>
                    <h4>LEED ASSESSMENT</h4>
                </CardTitle>          
                <CardBody>                    
                    <Row>
                        <Col md="3">
                        <h5>Potential Lead Value</h5>
                        
                          <i className="tim-icons icon-shape-star"/>
                          <i className="tim-icons icon-shape-star"/>
                          <span className="tim-icons icon-shape-star"></span>
                          <i className="tim-icons icon-shape-star"/>
                          <i className="tim-icons icon-shape-star"/>
                          <i className="tim-icons icon-shape-star"/>
                          
                        
                        </Col>
                        <Col md="3">
                        <h5>Level of work required to transform</h5>
                        </Col>
                        <Col md="3">
                        <h5>Time to close</h5>
                        </Col>

                    </Row>          
                    <br/>
                    <br/>
                    <Row>
                        <Label sm="2">Observation:</Label>
                        <Col sm="9">
                        <FormGroup>
                            <Input placeholder="Observation:" type="text" />
                        </FormGroup>
                        </Col>
                  </Row>      
                </CardBody>
            </Col>
        </Row>
    </div>
    )

};
