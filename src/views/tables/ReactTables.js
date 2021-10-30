/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//import React from "react";
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
        context.dispatch({ type: "SET_MENU", payload: 1 });
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



const ReactTables = () => {

  const [grilla, setGrilla] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
        //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
        //let resp = await fetch(`http://localhost:8080/democompany/ranking20`);
        let resp = await fetch(`http://localhost:9090/democompany/companycrosstab`);
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

  const [loading, setLoading] = useState(true);
  const [empresas, setEmpresas] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
        let resp = await fetch(`http://168.181.186.118:9093/democompany/allcomp`);
        //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
        //let resp = await fetch(`http://localhost:9090/democompany/companycrosstab`);
				resp = await resp.json();
        setEmpresas(resp.return);
        console.error(resp.return);
				setEmpresaSelected(resp.return[0].COMPANY_ID);
			} catch(error) {
				console.error(error);
			}
		};
		getData().then(() => setLoading(false));
	}, []);

  return (
    
    <>

      <div className="content">
        <Col md={8} className="ml-auto mr-auto">
          
          
        </Col>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">id {empresaSelected}</CardTitle>
                    
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
                      Header: "Applications",
                      accessor: "Applications (Count)",
                    },
                    {
                      Header: "Domains",
                      accessor: "Domains (Count)",
                    },    
                    {
                      Header: "Points of Presence",
                      accessor: "Points of Presence (Count)",
                    },
                    {
                      Header: "Primary CDN",
                      accessor: "Primary CDN (Content Delivery) Product",
                    },
                    {
                      Header: "Primary Cloud Host. Prod.",
                      accessor: "Primary Cloud Hosting Product",
                    },    
                    {
                      Header: "Employee by function",
                      accessor: "Employee distribution by function)",
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

export default ReactTables;


/*
        actions: (
          <div className="actions-right">
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="info"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-heart-2" />
            </Button>
          </div>
        ),

*/