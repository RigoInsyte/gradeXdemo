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
        let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies_with_attributes?screen=COMPANIES`);
        //let resp = await fetch(`http://localhost:9090/democompany/companycrosstab`);
        resp = await resp.json();
        //setGrilla(resp.return);
        resp = resp.companies.map((r)=>{
          return {...r, actions: 
          <Boton1 id={r.id}/> 
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
    
    <div style={{overflow: "scroll"}}>

        <ReactTable
          data={grilla}
          columns={[                    
            {
              Header: "Select",
              accessor: "actions",
              width: 100
            },
            {
              Header: "ID",
              accessor: "id",
              width: 100
            },
            {
              Header: "NAME",
              accessor: "name",
              width: 300
            },
            {
              Header: "Applications",
              accessor: "Applications (Count)",
              width: 200
            },
            {
              Header: "Domains",
              accessor: "Domains (Count)",
              width: 500
            },    
            {
              Header: "Points of Presence",
              accessor: "Points of Presence (Count)",
              width: 500
            },
            {
              Header: "Primary CDN",
              accessor: "Primary CDN (Content Delivery) Product",
              width: 500
            },
            {
              Header: "Primary Cloud Host. Prod.",
              accessor: "Primary Cloud Hosting Product",
              width: 500
            },    
            {
              Header: "Employee by function",
              accessor: "Employee distribution by function)",
              width: 200
            },   
                                 
          ]}
          defaultPageSize={10}
          
        />

    </div>
    
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