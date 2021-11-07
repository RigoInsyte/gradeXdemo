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
  } from "reactstrap";
  import "./compareGral.css"
import { isConstructorDeclaration } from 'typescript';

//const CompareGral = () => {
  export default function CompareGral() {

    const [singleSelect, setsingleSelect] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [empresas, setEmpresas] = useState([]);
    const [data1, setData]= useState([]);
    const [data2, setData2]= useState([]);
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp2, setSelectcomp2]= useState();

    const [selectcomp1Name, setSelectcomp1Name] = useState();
    const [selectcomp2Name, setSelectcomp2Name] = useState();

   
    const [titulo1, setTitulo1]= useState();
    const [titulo2, setTitulo2]= useState();

	useEffect(() => {
		const getData = async () => {
			try {
        //let resp = await fetch(`http://168.181.186.118:9093/democompany/allcomp`);
        let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies`);
        //https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies
        //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
			  resp = await resp.json();
        setData(resp.companies);
        setData2(resp.companies);
        console.error(resp.companies);
        setSelectcomp1(resp.companies[0].id);
        //setSelectcomp2(resp.return[0].COMPANY_ID);    
        setSelectcomp2(resp.return[0].COMPANY_ID);    
        console.log(resp.return[0].COMPANY_ID)

        // para borrar demo de ocmo armar datos para graficos
        var respuesta = resp.return 
        var auxIdes=[], auxNom=[];
        respuesta.map(elemento => {
          auxIdes.push(elemento.COMPANY_ID)
          auxNom.push(elemento.COMPANY_NAME)
        });
        console.log(auxIdes)
        console.log(auxNom)

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

  const [gridcompinves, setCompInvest]= useState();
		const getInves = async () => {
			try {
        //let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
        let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
			  resp = await resp.json();
        setCompInvest(resp.return);
        setTitulo1(resp.return[0].company_name1);    
        setTitulo2(resp.return[0].company_name2);    
        console.log(resp.return)
			  } catch(error) {
				  console.error(error);
			  }
		};
	

    // grid compara digital 
    const [gridcompdigi, setCompDigi]= useState();
		const getDigital = async () => {
			try {
        console.log (selectcomp1);
        //let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
        let resp = await fetch(`http://localhost:9090/democompany/comparedigital?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
			  resp = await resp.json();
        setCompDigi(resp.return);
        setTitulo1(resp.return[0].company_name1);    
        setTitulo2(resp.return[0].company_name2);    
        console.log(resp.return)
			  } catch(error) {
				  console.error(error);
			  }
		};




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

//  grilla tesk stack
const [gridcompteck, setCompTesck]= useState();
  const gridTeckStack = async () => {
    try {
      let resp = await fetch(`http://localhost:9090/democompany/compareteck?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
      resp = await resp.json();
      setCompTesck(resp.return);
      setTitulo1(resp.return[0].company_name1);    
      setTitulo2(resp.return[0].company_name2);    
      console.log(resp.return)
      } catch(error) {
        console.error(error);
      }
  };

// fin grilla tesk stac

// grid talent
const [gridcomptalent, setCompTalent]= useState();

  const getTalent = async () => {
    try {
      console.log (selectcomp1);
      //let resp = await fetch(`http://localhost:9090/democompany/compareinvestment3?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
      let resp = await fetch(`http://localhost:9090/democompany/comparetalent?comp1=` + selectcomp1 + `&comp2=` + selectcomp2);
      resp = await resp.json();
      setCompTalent(resp.return);
      setTitulo1(resp.return[0].company_name1);    
      setTitulo2(resp.return[0].company_name2);    
      console.log(resp.return)
      } catch(error) {
        console.error(error);
      }
  };
// end grid talent 


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
                            onChange={e => {setSelectcomp1(e.value);setSelectcomp1Name(e.label)}}
                            options= {data1.map(e=>({label: e.COMPANY_NAME, value: e.COMPANY_ID}))}
                            placeholder = {selectcomp1Name == "" ? "Single Select" : selectcomp1Name}
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
                          onChange={e => {setSelectcomp2(e.value);setSelectcomp2Name(e.label)}}
                          options= {data2.map(e=>({label: e.COMPANY_NAME, value: e.COMPANY_ID}))}                            
                          placeholder = {selectcomp2Name == "" ? "Single Select" : selectcomp2Name}
                        />
                        <br/>
                      </CardHeader>
                    </Card>
                </Col>    
                <Col md="2">
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Change selections</CardTitle>
                        <button onClick={clickBuscar}>Execute</button>
                        <br/>
                      </CardHeader>
                      <br/>
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
                      className={horizontalTabs === "investment" ? "active" : ""}
                      onClick={(e) =>
                        {changeActiveTab(e, "horizontalTabs", "investment"); getInves()}
                      }
                    >
                      Investment
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "teckstack" ? "active" : ""}
                      onClick={(e) =>
                        {changeActiveTab(e, "horizontalTabs", "teckstack"); gridTeckStack()}
                      }
                    >
                      Teck Stack
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "digital" ? "active" : ""}
                      onClick={(e) =>
                        {changeActiveTab(e, "horizontalTabs", "digital"); getDigital()}
                      }
                    >
                      Digital Performance
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                    
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "talent" ? "active" : ""}
                      onClick={(e) =>
                        {changeActiveTab(e, "horizontalTabs", "talent"); getTalent()}
                      }
                    >
                      Talent
                    </NavLink>
                  </NavItem>

                </Nav>
                <TabContent className="tab-space" activeTab={horizontalTabs}>
                  <TabPane tabId="investment">
                    <h4>Compare Investement</h4>
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
                  <TabPane tabId="teckstack">
                  <table className="styled-table">
                          <h4>...En desarrollo...</h4>
                          <thead>
                              <tr>
                                  <th>Info</th>
                                  <th>{titulo1}</th>
                                  <th>{titulo2}</th>
                                  
                              </tr>
                          </thead>
                          <tbody>
                            {
                                gridcompteck && gridcompteck.map((d) =>{
                                    return (
                                        <tr>
                                            <td>{d.output_name1}</td>
                                            <td>{d.value1}</td>
                                            <td>{d.value2}</td>
                                        </tr>
                                    )
                                } )  
                            }
                          </tbody>
                      </table>
                  </TabPane>
                  <TabPane tabId="digital">
                    <h4>Compare Digital Performance</h4>
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
                                          <td>{d.value1}</td>
                                          <td>{d.value2}</td>
                                      </tr>
                                  )
                              } )  
                          }
                        </tbody>
                    </table>
                  </TabPane>
                  <TabPane tabId="talent">                  
                    <h4>Compare Talent</h4>
                    <table className="styled-table">
                          <thead >
                              <tr>
                                  <th>Info</th>
                                  <th>{titulo1}</th>
                                  <th>{titulo2}</th>
                                  
                              </tr>
                          </thead>
                          <tbody>
                            {
                                gridcomptalent && gridcomptalent.map((d) =>{
                                    return (
                                        <tr>
                                            <td>{d.output_name1}</td>
                                            <td>{d.value1}</td>
                                            <td>{d.value2}</td>
                                        </tr>
                                    )
                                } )  
                            }
                          </tbody>
                        </table>
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