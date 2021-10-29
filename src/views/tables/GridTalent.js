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
        context.dispatch({ type: "SET_EMPRESA", payload: id });
        context.dispatch({ type: "SET_MENU", payload: 5 });
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



const GridTalent = () => {

  const [grilla, setGrilla] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
        //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
        //let resp = await fetch(`http://localhost:8080/democompany/ranking20`);
        let resp = await fetch(`http://localhost:9090/democompany/talentcrosstab`);
        resp = await resp.json();
        //setGrilla(resp.return);
        resp = resp.return.map((r)=>{
          return {...r, actions: 
          <Boton1 id={r.company_id}/> 
        }
        })
        setGrilla(resp);
       // console.log(resp.return);
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
                <CardTitle tag="h4">Talent Grid - id {empresaSelected}</CardTitle>
                    
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
                      accessor: "company_id",
                    },
                    {
                      Header: "NAME",
                      accessor: "company_name",
                    },
                    {
                      Header: "Employee distribution by function",
                      accessor: "Employee distribution by function)",
                    },
                    {
                      Header: "New digital recruitments",
                      accessor: "New digital recruitments (Data Scientists, Product Owners…)",
                    },    
                    {
                      Header: "# Employees",
                      accessor: "# Employees",
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

export default GridTalent;
