import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import ReactTable from "components/ReactTable/ReactTable.js";
//import Datastore from "./store/Datastore";
//import Data from "./Data";
import Context from "./store/Context";



const Boton1 = ({id}) => {
  const context = useContext(Context);
  return (
    <div className="actions-right">
    <Button
      onClick={() =>{
        context.dispatch({ type: "SET_MENU_OLD", payload: 41 });
        context.dispatch({ type: "SET_EMPRESA", payload: id });
        context.dispatch({ type: "SET_MENU", payload: 2 });
      } }
      color="info"
      size="sm"
      className={classNames("btn-icon btn-link like"
      )}
    >
      <i className="tim-icons icon-notes" />
    </Button>
  </div>
  )
}



const GridInves = () => {

  const [grilla, setGrilla] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
        //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
        let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies_with_attributes?screen=INVESTMENT`);
        //let resp = await fetch(`http://localhost:9090/democompanyfd/investementcrosstab`);

        resp = await resp.json();
        console.log (resp);
        let formateado = resp.companies.map((r)=>{
          return {...r, actions: 
          <Boton1 id={r.id}/> 
        }
        })
        setGrilla(formateado);
        console.log(resp);
			} catch(error) {
				console.error(error);
			}
		};
		getData();
	}, []);


  const context = useContext(Context);

	const handleMenu = (cual) => {
		context.dispatch({ type: "SET_MENU", payload: cual });
  };
  
  //const handleEmpresaChange = (cual1) => {
	//	context.dispatch({ type: "SET_EMPRESA", payload: cual1 });
  //};
  const [empresaSelected, setEmpresaSelected] = useState("");

  const handleEmpresaChange = (e) => {
		context.dispatch({ type: "SET_EMPRESA", payload: e.target.value });
		setEmpresaSelected(e.target.value);
	};

  

  return (
    
    <>

      <div className="content">
        <Col md={8} className="ml-auto mr-auto">
          
          
        </Col>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">new Investment Grid - id {empresaSelected}</CardTitle>
                    
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={grilla}
                  filterable
                  resizable={false}
                  columns={[                    
                    {
                      Header: "Select",
                      accessor: "actions",
                    },
                    {
                      Header: "ID",
                      accessor: "id",
                    },
                    {
                      Header: "NAME",
                      accessor: "name",
                    },
                    {
                      Header: "Founded",
                      accessor: "Founded date",
                    },
                    {
                      Header: "Industry",
                      accessor: "Industry",
                    },    
                    {
                      Header: "Location",
                      accessor: "Location",
                    },
                    {
                      Header: "Num. of Acquis.",
                      accessor: "Number of Acquisitions",
                    },
                    {
                      Header: "Num. of Funding R.",
                      accessor: "Number of Funding Rounds",
                    },    
                    {
                      Header: "Fund. Amount (in USD)",
                      accessor: "Total Funding Amount (in USD)",
                    },    
                    {
                      Header: "Website",
                      accessor: "Website",
                    },    
                    

                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    
  );
};

export default GridInves;

