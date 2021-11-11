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
        context.dispatch({ type: "SET_MENU", payload: 4 });
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



const GridDigital = () => {

  const [grilla, setGrilla] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
        let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies_with_attributes?screen=DIGITAL_PERFORMANCE`);        
        //let resp = await fetch(`http://localhost:9090/democompany/digitalcrosstab`);
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
    
    <>

      <div className="content">
        <Col md={8} className="ml-auto mr-auto">
          
          
        </Col>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
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
                      Header: "Youtube (Subscriptors)",
                      accessor: "Youtube (Subscriptors)",
                    },
                    {
                      Header: "Traffic web by country",
                      accessor: "Traffic web by country)",
                    },    
                    {
                      Header: "Number of apps Applestore",
                      accessor: "Number of apps Applestore",
                    },
                    {
                      Header: "Total visits website",
                      accessor: "Total visits website",
                    },
                    {
                      Header: "Instagram (Followers)",
                      accessor: "Instagram (Followers)",
                    },    
                    {
                      Header: "Rating Google Maps",
                      accessor: "Rating Google Maps ",
                    },    
                    {
                      Header: "Facebook (Followers)",
                      accessor: "Facebook (Followers)",
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

export default GridDigital;

