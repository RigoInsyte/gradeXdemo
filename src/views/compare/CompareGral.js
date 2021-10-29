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
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    FormGroup,
    Progress,
    CustomInput,
    Row,
    Col,
  } from "reactstrap";
  import "./compareGral.css"

//const CompareGral = () => {
  export default function CompareGral() {

    const [singleSelect, setsingleSelect] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [empresas, setEmpresas] = useState([]);
    const [data1, setData]= useState([]);
    const [data2, setData2]= useState([]);
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp2, setSelectcomp2]= useState();

    const [gridcompinves, setCompInvest]= useState();
    const [titulo1, setTitulo1]= useState();
    const [titulo2, setTitulo2]= useState();

	useEffect(() => {
		const getData = async () => {
			try {
        let resp = await fetch(`http://168.181.186.118:9093/democompany/allcomp`);
        //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
			  resp = await resp.json();
        setData(resp.return);
        setData2(resp.return);
        console.error(resp.return);
        setSelectcomp1(resp.return[0].COMPANY_ID);
        setSelectcomp2(resp.return[0].COMPANY_ID);    
        console.log(resp.return[0].COMPANY_ID)
			  } catch(error) {
				  console.error(error);
			  }
		};
		getData().then(() => setLoading(false));
	}, []);


    const [empresaSelected, setEmpresaSelected] = useState("");

    const [horizontalTabs, sethorizontalTabs] = React.useState("profile");
    // with this function we change the active tab for all the tabs in this page
    const changeActiveTab = (e, tabState, tabName) => {
      e.preventDefault();
      switch (tabState) {
        case "horizontalTabs":
          sethorizontalTabs(tabName);
          break;
        default:
          break;
      }
    };

  // compara investement

	useEffect(() => {
		const getInves = async () => {
			try {
        //let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
        let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=124&comp2=125`);
			  resp = await resp.json();
        setCompInvest(resp.return);
        setTitulo1(resp.return[0].company_name1);    
        setTitulo2(resp.return[0].company_name2);    
        console.log(resp.return)
			  } catch(error) {
				  console.error(error);
			  }
		};
		getInves().then(() => setLoading(false));
	}, []);


  const [gridcompdigi, setCompDigi]= useState();
	useEffect(() => {
		const getDigital = async () => {
			try {
        //let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
        let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=1&comp2=2`);
			  resp = await resp.json();
        setCompDigi(resp.return);
        setTitulo1(resp.return[0].company_name1);    
        setTitulo2(resp.return[0].company_name2);    
        console.log(resp.return)
			  } catch(error) {
				  console.error(error);
			  }
		};
		getDigital().then(() => setLoading(false));
	}, []);




  const clickBuscar = ()=>{

    const buscarGrilla=async(url)=>{
      try {
        //let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
        let resp = await fetch(url);
			  resp = await resp.json();
        setCompInvest(resp.return);
        setTitulo1(resp.return[0].company_name1);    
        setTitulo2(resp.return[0].company_name2);    
        console.log(resp.return)
			  } catch(error) {
				  console.error(error);
			  }
    }
    const param1 = selectcomp1
    console.log(param1)
    const baseUrl3="http://localhost:9090/democompany/compareinvestment3?comp1=" + selectcomp1 + "&comp2=" + selectcomp2
    buscarGrilla(baseUrl3)
  }
  //  fin compare insvestment

    return (
        <div className="content">
            COMPARE COMPANIES
            <Row>
                <Col md="4">
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Selected Company 1</CardTitle>
                        {selectcomp1}
                        <br/>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="selectcomp1"
                          value={selectcomp1}
                          onChange={e => setSelectcomp1(e.value)}
                          options= {data1.map(e=>({label: e.COMPANY_NAME, value: e.COMPANY_ID}))}
                          placeholder="Select company ..."
                        />
                        <br/>
                      </CardHeader>
                    </Card>
                </Col>    
                <Col md="4">
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Selected Company 2</CardTitle>
                        {selectcomp2}
                        <br/>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="selectcomp2"
                          value={selectcomp2}
                          onChange={e => setSelectcomp2(e.value)}
                          options= {data2.map(e=>({label: e.COMPANY_NAME, value: e.COMPANY_ID}))}                            
                          placeholder="Single Select"
                        />
                        <br/>
                      </CardHeader>
                    </Card>
                </Col>    
                <Col md="2">
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Selected Company 2</CardTitle>
                        <button onClick={clickBuscar}>Execute</button>
                      </CardHeader>
                    </Card>
                </Col>    

            </Row>    
            <Row>
            <Card>
              <CardHeader>
                <h5 className="card-category">Navigation Compare</h5>
                <CardTitle tag="h3">Select Criteria</CardTitle>
              </CardHeader>
              <CardBody>
                <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "profile" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabs", "profile")
                      }
                    >
                      Investment
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "settings" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabs", "settings")
                      }
                    >
                      Digital Performance
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "options" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabs", "options")
                      }
                    >
                      Teck Stack
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "teckstack" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabs", "teckstack")
                      }
                    >
                      Teck Stack
                    </NavLink>
                  </NavItem>

                </Nav>
                <TabContent className="tab-space" activeTab={horizontalTabs}>
                  <TabPane tabId="profile">
                    <table className="styled-table">
                          <thead>
                              <tr>
                                  <th>Info</th>
                                  <th>{titulo1}</th>
                                  <th>{titulo2}</th>
                                  
                              </tr>
                          </thead>
                          <tbody>
                            {
                                gridcompinves && gridcompinves.map((d) =>{
                                    return (
                                        <tr>
                                            <td>{d.output_name1}</td>
                                            <td>{d.text_value1}</td>
                                            <td>{d.text_value2}</td>
                                        </tr>
                                    )
                                } )  
                            }
                          </tbody>
                      </table>

                  </TabPane>
                  <TabPane tabId="settings">
                  <table className="styled-table">
                          <thead>
                              <tr>
                                  <th>Info</th>
                                  <th>{titulo1}</th>
                                  <th>{titulo2}</th>
                                  
                              </tr>
                          </thead>
                          <tbody>
                            {
                                gridcompdigi && gridcompdigi.map((d) =>{
                                    return (
                                        <tr>
                                            <td>{d.output_name1}</td>
                                            <td>{d.text_value1}</td>
                                            <td>{d.text_value2}</td>
                                        </tr>
                                    )
                                } )  
                            }
                          </tbody>
                      </table>
                  </TabPane>
                  <TabPane tabId="options">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                  <TabPane tabId="teckstack">
                    GRID TECK STACK <br />
                    <br />
                    Development in progress ...
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>              
            </Row>
        </div>
    )
};

//export default CompareGral;


/*

onChange={e => setSelectcomp1(e.value)}
*/