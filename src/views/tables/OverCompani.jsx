import React, { useContext, useEffect, useState } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table} from "reactstrap";

import Context from "./store/Context";

// core components


const OverCompani = () => {

    const context = useContext(Context);
    let { empresaSelected }  = context.state;
    const [grilla, setGrilla] = useState([]);
    const [empre, setEmpre] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies/${empresaSelected}?screen=COMPANIES`);
          //let resp = await fetch(`http://168.181.186.118:9093/democompany/companyover?idcom=${empresaSelected}`);
          resp = await resp.json();
          setGrilla(resp.company.attributes);
          setEmpre(resp.company.name);
        } catch(error) {
          console.error(error);
        }
      };
      getData();
    }, [empresaSelected]);
      
    

  return (
    <>
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col>
                    <CardTitle tag="h2">Companies - {empre}</CardTitle>
                  </Col>
                  <Col align="right">
                  {(() => {
                  switch (empre) {
                  case "Vestiaire Collective":
                      return (   
                    <img 
                    src="https://es.vestiairecollective.com/assets/img/home/vestiairecollective_logo.svg?v=1"
                    width="300px"
                    height="80px"
                    >
                    </img>
                      );
                    case "Deezer" :
                      return(<>
                        <img 
                        src="https://www.elgrupoinformatico.com/static/Manuales/2019/10/deezer-logo-1300x650.jpg"
                        width="300px"
                        height="80px"
                        >
                        </img>
                    </>);
                    default :
                    return (
                      <>
                        <img 
                        src="https://www.payplug.com/hubfs/payplug_com/static/images/logo-payplug.png"
                        width="300px"
                        height="80px"
                        >
                        </img>
                      
                      </>
                    );                                                                      
                  }
                  })()}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" >
                    <thead className="text-primary">
                        <tr>
                        <th>INFO</th>
                        <th>VALUE</th>
                        </tr>
                    </thead>
                    <tbody>
                                {
                                    grilla.map((d) =>{
                                        return (
                                            <tr>
                                                <td>{d.name}</td>
                                                <td>{d.value}</td>                                            
                                            </tr>
                                        )
                                    } )  
                                }
                            </tbody>
                    </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
};

export default OverCompani;