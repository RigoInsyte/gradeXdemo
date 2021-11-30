import React from "react";

// reactstrap components
import {
  Button,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";

const CompTable = () => {
    return (  
        <div>
          
          <Row>
              <Table>
              <thead className="text-primary">
                <tr>
                  <th className="text-center">#</th>
                  <th>Company</th>                  
                  <th className="text-center">Location</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <div>
                      <img
                        alt="..."
                        width="150px"
                        height="60px"
                        className="img img-raised"
                        src="https://bigbooster.org/wp-content/uploads/2020/07/Logo-schneider.png"
                      />
                    </div>
                  </td>
                  <td>
                    <h4>SCHNEIDER ELECTRIC</h4>
                    <br/>
                    Nous fournissons des solutions numériques  <br/>
                    d'énergie et d'automatismes pour l'efficacité  <br/>
                    énergétique et le développement durable.
                    
                    <br/>
                    <Button className="btn-icon" color="linkedin">
                      <i className="fab fa-linkedin" />
                    </Button>
                  </td>
                  <td className="text-left">
                  <i className="tim-icons icon-square-pin text-primary" />{" "}
                  Alemania  <br/>
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  Industrial Engineering  <br/>
                  <i className="tim-icons icon-user-run text-primary" />{" "}
                  5001-10000  <br/>
                  <i className="tim-icons icon-money-coins text-primary" />{" "}
                  $ 105M - $ 155M  <br/>
                  </td>

                  
                  <td className="text-right">
                    <Link to={"/oneuser"}>
                    <Button className="btn-simple" color="primary">
                        View Employees
                    </Button>
                     </Link>

                    
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip974171201"
                    >
                      Tooltip on top
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="photo">
                      <img
                        alt="..."
                        src={require("assets/img/robi.jpg").default}
                      />
                    </div>
                  </td>
                  <td>John Doe</td>
                  
                  <td className="text-right">€ 89,241</td>
                  <td className="text-right">
                    <Button
                      className="btn-link btn-icon"
                      color="success"
                      id="tooltip533157871"
                      size="sm"
                    >
                      <i className="tim-icons icon-refresh-01" />
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip533157871"
                    >
                      Tooltip on top
                    </UncontrolledTooltip>
                    <Button
                      className="btn-link"
                      color="danger"
                      id="tooltip423541936"
                      size="sm"
                    >
                      <i className="tim-icons icon-simple-remove" />
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip423541936"
                    >
                      Tooltip on top
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="photo">
                      <img
                        alt="..."
                        src={require("assets/img/lora.jpg").default}
                      />
                    </div>
                  </td>
                  <td>Alex Mike</td>                  
                  <td className="text-right">€ 92,144</td>
                  <td className="text-right">
                    <Button
                      className="btn-link btn-icon"
                      color="success"
                      id="tooltip101947879"
                      size="sm"
                    >
                      <i className="tim-icons icon-refresh-01" />
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip101947879"
                    >
                      Tooltip on top
                    </UncontrolledTooltip>
                    <Button
                      className="btn-link"
                      color="danger"
                      id="tooltip964133889"
                      size="sm"
                    >
                      <i className="tim-icons icon-simple-remove" />
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip964133889"
                    >
                      Tooltip on top
                    </UncontrolledTooltip>
                  </td>
                </tr>

                
              </tbody>
            </Table>
      </Row>
    </div>
  );
};

export default CompTable;